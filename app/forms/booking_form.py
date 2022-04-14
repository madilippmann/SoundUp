from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import DataRequired
from datetime import datetime

today = datetime.today()


class BookingForm(FlaskForm):
    startDateTime = DateTimeField(
        'startDateTime',
        validators=[
            DataRequired(),
            # DateRange(
            #     min=datetime(today.year, today.month, today.day)
            # )
        ])

    print(startDateTime)
    endDateTime = DateTimeField(
        'endDateTime',
        validators=[
            DataRequired()
            # DateRange()
        ])
    description = StringField('description')
