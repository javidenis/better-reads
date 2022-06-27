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