from turtle import title
from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, Field
from wtforms.validators import DataRequired, ValidationError

from app.models import genres

class ListField(Field):
    def process_formdata(self, valuelist):
        self.data = valuelist

def check_genre(form, field):
    genreList = field.data
    if len(genreList) < 1:
        raise ValidationError('Genre is Required')

def check_title_len(form, field):
    title = field.data
    if len(title) > 200:
        raise ValidationError('Title cannot be more than 200 characters')

def check_author_len(form, field):
    author = field.data
    if len(author) > 200:
        raise ValidationError('Author cannot be more than 200 characters')

def check_sub_len(form, field):
    sub_head = field.data
    if len(sub_head) > 500:
        raise ValidationError('Sub Heading cannot be more than 500 characters')

class NewBookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), check_title_len])
    author = StringField('author', validators=[DataRequired(),check_author_len])
    sub_heading = StringField('sub_heading', validators=[DataRequired(), check_sub_len])
    description = StringField('description', validators=[DataRequired()])
    publish_date = DateField('publish_date', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    books_genre = ListField('books_genre', validators=[check_genre])
