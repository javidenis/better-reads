from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired


class NewBookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    author = StringField('author', validators=[DataRequired()])
    sub_heading = StringField('sub_heading', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    publish_date = DateField('publish_date', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    books_genre = IntegerField('books_genre', validators=[DataRequired()])
