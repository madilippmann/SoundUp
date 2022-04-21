from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking
from datetime import datetime, date


def check_time_availability(form, field):
    artist_bookings = Booking.query.filter(Booking.artist_id == form.data['artist_id']).all()

    end = datetime.fromtimestamp(form.data['end_date_time'] / 1000)
    start = datetime.fromtimestamp(form.data['start_date_time'] / 1000)

    for booking in artist_bookings:
        if ((start <= booking.start_date_time and booking.end_date_time <= end)
            or (booking.start_date_time <= end <= booking.end_date_time)
            or (booking.start_date_time <= start <= booking.end_date_time)):
            raise ValidationError('Selected times conflict with another booking')


def edit_check_time_availability(form, field):
    artist_bookings = Booking.query.filter(Booking.artist_id == form.data['artist_id']).all()

    end = datetime.fromtimestamp(form.data['end_date_time'] / 1000)
    start = datetime.fromtimestamp(form.data['start_date_time'] / 1000)

    for booking in artist_bookings:
        if (booking.id != form.data['booking_id'] and ((start <= booking.start_date_time and booking.end_date_time <= end)
            or (booking.start_date_time <= end <= booking.end_date_time)
            or (booking.start_date_time <= start <= booking.end_date_time))):
            raise ValidationError('Selected times conflict with another booking')

        elif (booking.id == form.data['booking_id'] and start == booking.start_date_time and end == booking.end_date_time and booking.description == form['description'].data):
            raise ValidationError('Please make change to update booking.')


def past_date(form, field):
    today = datetime.today()
    end = datetime.fromtimestamp(form.data['end_date_time'] / 1000)
    start = datetime.fromtimestamp(form.data['end_date_time'] / 1000)

    if end < today or start < today:
        raise ValidationError('Please select a future date.')


# today = datetime.today()
class BookingForm(FlaskForm):
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
    start_date_time = IntegerField('start_date_time', validators=[DataRequired(), check_time_availability, past_date])
    end_date_time = IntegerField('end_date_time', validators=[DataRequired()])
    description = StringField('description')

class EditBookingForm(FlaskForm):
    booking_id = IntegerField('artist_id', validators=[DataRequired()])
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
    start_date_time = IntegerField('start_date_time', validators=[DataRequired(), edit_check_time_availability, past_date])
    end_date_time = IntegerField('end_date_time', validators=[DataRequired()])
    description = StringField('description')
