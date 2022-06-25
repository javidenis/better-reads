from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Book

class NewBookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    author = StringField('author', validators=[DataRequired()])
    sub_heading = StringField('author', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    publish_date = DateField('publish_date', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
