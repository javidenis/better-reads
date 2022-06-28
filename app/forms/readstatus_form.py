from flask_wtf import FlaskForm
from wtforms import IntegerField,StringField
from wtforms.validators import DataRequired


class AddReadStatus(FlaskForm):
	user_id = IntegerField('user_id')
	book_id = IntegerField('book_id', validators=[DataRequired()])
	readStatus = StringField('readStatus', validators=[DataRequired()])