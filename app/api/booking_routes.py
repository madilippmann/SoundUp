from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import db, Booking
from app.forms import BookingForm
booking_routes = Blueprint('bookings', __name__)
from datetime import datetime

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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
        print('\n\n\n\n\nSTART TIME ', form.data['start_date_time'], '\n\n\n\n\n')
        data = {
            "user_id": session['_user_id'],
            "artist_id": form.data["artist_id"],
            "start_date_time": datetime.fromtimestamp(form.data["start_date_time"] / 1000),
            "end_date_time": datetime.fromtimestamp(form.data["end_date_time"] / 1000),
            "description": form.data["description"],
            "confirmed": True
        }

        booking = Booking(**data)
        db.session.add(booking)
        db.session.commit()
        print('\n\n\n\n\nSTART TIME ', booking.start_date_time, '\n\n\n\n\n')
        return jsonify(booking.to_dict())

    print('\n\n\n\n\n', validation_errors_to_error_messages(form.errors), '\n\n\n\n')

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route('/<int:booking_id>/', methods=['PUT'])
@login_required
def update_booking(booking_id):
    print('\n\n\n\n\n\nentered\n\n\n\n\n\n')
    booking = request.get_json()
    form = BookingForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    # print('\n\n\n\n\n\n', isinstance(form['start_date_time'].data, int),'\n\n\n\n\n\n')

    if form.validate_on_submit():

        booking = Booking.query.get(booking_id)
        booking.start_date_time = datetime.fromtimestamp(form['start_date_time'].data / 1000)
        booking.end_date_time = datetime.fromtimestamp(form['end_date_time'].data / 1000)
        booking.description = form['description'].data

        db.session.commit()
        return jsonify(booking.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:booking_id>/', methods=["DELETE"])
def delete_booking(booking_id):
    booking = Booking.query.get(booking_id)

    # if booking.to_dict()['user_id'] == int(session['_user_id']):
    db.session.delete(booking)
    db.session.commit()
    return jsonify(booking_id)
    # else:
    #     return jsonify('invalid'), 401
