from crypt import methods
from flask import Blueprint, request
from flask_login import login_required
from app.forms.new_review_form import NewReviewForm
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@review_routes.route('', methods=['POST'])
@login_required
def post_review():
    form = NewReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            content=form.data['content'],
            rating=form.data['rating'],
            user_id=form.data['user_id'],
            book_id=form.data['book_id'],
        )

        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
