from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired, NumberRange

 def validate_description(form, field):
        if len(field.data) < 255:
            raise ValidationError('Description must be less than 255 characters')

class BookingForm(FlaskForm):
    date = DateField('date', validators=[DataRequired()])
    description = StringField('description', validators=[validate_description])
