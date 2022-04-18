from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking

from datetime import datetime

# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if not user:
#         raise ValidationError('Email provided not found.')


def check_start_time_availability(form, field):
    artist_bookings = Booking.query.filter(Booking.artist_id == form.data['artist_id']).all()

    start = datetime.fromtimestamp(form.data['start_date_time'] / 1000)

    for booking in artist_bookings:
        if booking.start_date_time <= start <= booking.end_date_time:
            raise ValidationError('Selected start time conflicts with another booking')


def check_end_time_availability(form, field):
    artist_bookings = Booking.query.filter(Booking.artist_id == form.data['artist_id']).all()

    end = datetime.fromtimestamp(form.data['end_date_time'] / 1000)

    for booking in artist_bookings:
        if booking.start_date_time <= end <= booking.end_date_time:
            raise ValidationError('Selected end time conflicts with another booking.')





# today = datetime.today()
class BookingForm(FlaskForm):
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
    start_date_time = IntegerField('start_date_time', validators=[DataRequired(), check_start_time_availability])
    end_date_time = IntegerField('end_date_time', validators=[DataRequired(), check_end_time_availability])
    description = StringField('description')
