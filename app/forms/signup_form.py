from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
from .utils import length



def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), length('Name', 40)])
    email = StringField('email', validators=[DataRequired(), Email(), user_exists, length('Email', 255)])
    password = StringField('password', validators=[DataRequired(), length('Password', 40)])
