from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, Field
from wtforms.validators import DataRequired, ValidationError

from app.models import genres

class ListField(Field):
    def process_formdata(self, valuelist):
        self.data = valuelist

def check_genre(form, field):
    genreList = field.data
    print(genreList)
    if len(genreList) < 1:
        raise ValidationError('Genre is Required')

class NewBookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    author = StringField('author', validators=[DataRequired()])
    sub_heading = StringField('sub_heading', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    publish_date = DateField('publish_date', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    books_genre = ListField('books_genre', validators=[check_genre])
