from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField
from wtforms.validators import DataRequired
# from datetime import datetime

# today = datetime.today()
class BookingForm(FlaskForm):
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
    start_date_time = IntegerField('start_date_time', validators=[DataRequired()])
    end_date_time = IntegerField('end_date_time', validators=[DataRequired()])
    description = StringField('description')
