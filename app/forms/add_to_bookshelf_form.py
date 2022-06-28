from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class AddToBookShelfForm(FlaskForm):
	user_id = IntegerField('user_id')
	bookshelf_id = IntegerField('bookshelf_id', validators=[DataRequired()])
	book_id = IntegerField('book_id', validators=[DataRequired()])