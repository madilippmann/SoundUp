from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Booking
from app.forms import BookingForm

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/')
@login_required
def get_bookings():
    bookings = Booking.query.filter(Booking.user_id == session['_user_id']).all()
    bookings = [booking.to_dict() for booking in bookings]
    return jsonify(bookings)


@booking_routes.route('/<int:booking_id>/', methods=['GET'])
@login_required
def get_booking(booking_id):
    bookings = Booking.query.filter(Booking.id == booking_id). \
                             filter(Booking.user_id == session['_user_id']).all()

    return jsonify(bookings.to_dict())


@booking_routes.route('/', methods=['POST'])
@login_required
def create_booking():
    booking = request.get_json()
    form = BookingForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = {
            "user_id": session['_user_id'],
            "artist_id": form.data["artist_id"],
            "date": form.data["date"],
            "description": form.data["description"],
            "confirmed": True
        }
        booking = Booking(**data)
        db.session.add(booking)
        db.session.commit()
        return jsonify(booking.to_dict())


    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route('/<int:booking_id>/', methods=['PUT'])
@login_required
def update_booking(booking_id):
    booking = request.get_json()
    form = BookingForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        booking = Booking.query.get()
        booking.date = form['date'].data
        booking.description = form['description'].data

        db.session.commit()
        return jsonify(booking.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:booking_id>/', methods=["DELETE"])
def delete_booking(booking_id):
    booking = Booking.query.get(booking_id)

    if booking.to_dict()['userId'] == int(session['_user_id']):
        db.session.delete(booking)
        db.session.commit()
        return jsonify(booking_id)
    else:
        return jsonify('invalid'), 401
