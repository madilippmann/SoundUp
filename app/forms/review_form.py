from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
    rating = IntegerField(
        'rating',
        validators=[
            DataRequired(message='Must leave rating'),
            NumberRange(min=1, max=5, message='Rating must be between 1 and 5')
        ])
    comment = StringField(
        'comment',
        validators=[
            DataRequired(message='Must leave comment'),
            Length(min=1, max=255, message='Comment must be between 1 and 255 characters'),
        ])
