from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired,ValidationError

def check_name_length(form, field):
	name = field.data
	if len(name) > 200:
		raise ValidationError("Bookshelf Name Character Limit is 200")

class NewBookShelfForm(FlaskForm):
	name = StringField('name', validators=[DataRequired(), check_name_length])
	user_id = IntegerField('user_id', validators=[DataRequired()])
	bookshelves_book = IntegerField('bookshelves_book')
