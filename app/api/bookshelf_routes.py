from flask import Blueprint, request
from flask_login import login_required
from app.models import BookShelf, db
from app.forms import NewBookShelfForm

bookshelf_routes = Blueprint('bookshelves', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@bookshelf_routes.route('', methods=['GET'])
@login_required
def get_all_bookshelves():
	bookshelves = BookShelf.query.all()
	return {"bookshelves": [bookshelf.to_dict() for bookshelf in bookshelves]}

@bookshelf_routes.route('', methods=['POST'])
@login_required
def post_bookshelf():
	form = NewBookShelfForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		new_bookshelf = BookShelf(
			name=form.data['name'],
			user_id=form.data['user_id']
		)
		db.session.add(new_bookshelf)
		db.session.commit()
		return new_bookshelf.to_dict()
	return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Add a book to a shelf
@bookshelf_routes.route('/<int:id>', methods=['PUT'])
@login_required
def add_book_to_bookshelf(id):
	form = NewBookShelfForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		bookshelf = BookShelf.query.get(id)

		bookshelf.bookshelves_book.append(form.data['bookshelves_book'])

		db.session.commit()
		return bookshelf.to_dict()

# Remove a book from a shelf
@bookshelf_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def remove_book_from_bookshelf(id):
	form = NewBookShelfForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		bookshelf = BookShelf.query.get(id)


		bookshelf.bookshelves_book=[book for book in bookshelf.bookshelves_book if book.bookId != form.data['bookshelves_book']]

		db.session.commit()
		return bookshelf.to_dict()

@bookshelf_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_bookshelf(id):
	bookshelf = BookShelf.query.get(id)
	db.session.delete(bookshelf)
	db.session.commit()
	return {"Successful": 'Successful'}