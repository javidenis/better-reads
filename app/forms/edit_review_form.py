from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, Field
from wtforms.validators import DataRequired

class EditReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    book_id = IntegerField('book_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    review_id = IntegerField('review_id',validators=[DataRequired()])
