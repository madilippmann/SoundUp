from flask_wtf import FlaskForm
# from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length

def length(name, max):

    def _length(form, field):
        if len(field.data) > max:
            raise ValidationError(f'{name} must be less than {max} characters')

    return _length
