from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Book, db, Genre
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)
from app.forms import NewBookForm


book_routes = Blueprint('books', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@book_routes.route('')
def get_all_books():
    books = Book.query.all()
    return {"books": [book.to_dict() for book in books]}

@book_routes.route('', methods=['POST'])
@login_required
def post_book():
    if 'cover_url' in request.files:
        image = request.files["cover_url"]
        
        if not allowed_file(image.filename):
            return {"errors": "file type not permitted"}, 400
        
        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)

        if "url" not in upload:
            return upload, 400

        cover_url = upload['url']
        form = NewBookForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():

            form_genre_array1 = form.data['books_genre'][0].split(',')
            form_genre_array = [int(x) for x in form_genre_array1]
            genres = Genre.query.all()
            books_genre = [genre for genre in genres if genre.id in form_genre_array]

            new_book = Book(
                title=form.data['title'],
                author=form.data['author'],
                sub_heading=form.data['sub_heading'],
                description=form.data['description'],
                publish_date=form.data['publish_date'],
                user_id=form.data['user_id'],
                books_genre=books_genre,
                cover_url=cover_url,
            )
            db.session.add(new_book)
            db.session.commit()
            return new_book.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    form = NewBookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form_genre_array1 = form.data['books_genre'][0].split(',')
        form_genre_array = [int(x) for x in form_genre_array1]
        genres = Genre.query.all()
        books_genre = [genre for genre in genres if genre.id in form_genre_array]

        new_book = Book(
            title=form.data['title'],
            author=form.data['author'],
            sub_heading=form.data['sub_heading'],
            description=form.data['description'],
            publish_date=form.data['publish_date'],
            user_id=form.data['user_id'],
            books_genre=books_genre,
            cover_url='https://i.imgur.com/sJ3CT4V.gif'
        )

        db.session.add(new_book)
        db.session.commit()
        return new_book.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
