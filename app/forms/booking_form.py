from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired

class BookingForm(FlaskForm):
    date = DateField('date', validators=[DataRequired()])
    description = StringField('description')
