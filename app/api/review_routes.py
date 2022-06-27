from crypt import methods
from flask import Blueprint, request
from flask_login import login_required
from app.forms.new_review_form import NewReviewForm
from app.forms.edit_review_form import EditReviewForm
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


@review_routes.route('')
def get_all_reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}

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

@review_routes.route('', methods=['PUT'])
@login_required
def edit_review():
    form = EditReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reviews = Review.query.all()
        thisReview = [x for x in reviews if x.id == form.data['review_id']]
        thisReview[0].content = form.data['content'],
        thisReview[0].rating=form.data['rating'],
        thisReview[0].user_id=form.data['user_id'],
        thisReview[0].book_id=form.data['book_id'],
        db.session.commit()
        return thisReview[0].to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {'Successful': 'Successful'}

        
