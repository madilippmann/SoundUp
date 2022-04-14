from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange


class ReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    comment = StringField(
        'description',
        validators=[
            DataRequired(),
            Length(min=1, max=255, message='Review must be less than 255 characters'),
            NumberRange(min=1, max=5, message='Rating must be between 1 and 5')
        ])
