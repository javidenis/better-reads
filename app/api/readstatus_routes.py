from flask import Blueprint, request
from flask_login import login_required
from app.models import ReadStatus, db, readstatus
from app.forms.readstatus_form import AddReadStatus

readstatus_routes = Blueprint('readstatus', __name__)

@readstatus_routes.route('', methods=['GET'])
def get_readstatus():
    status = ReadStatus.query.all()
    return {'readStatus': [readStatus.to_dict() for readStatus in status]}

@readstatus_routes.route('', methods=['POST'])
@login_required
def post_readstatus():
    form = AddReadStatus()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        read_statuses = ReadStatus.query.all()
        existing = [status for status in read_statuses if status.book_id == form.data['book_id'] and status.user_id == form.data['user_id']]
        if len(existing) > 0:
            existing[0].readStatus = form.data['readStatus']
            db.session.commit()
            return existing[0].to_dict()

        
        new_status = ReadStatus(
            user_id = form.data['user_id'],
            book_id = form.data['book_id'],
            readStatus = form.data['readStatus']
        )
        db.session.add(new_status)
        db.session.commit()
        return new_status.to_dict()
