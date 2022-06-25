from .db import db

class ReadStatus(db.Model):
  __tablename__ = 'readstatues'

  id = db.Column(db.Integer, primary_key=True)
  book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
  user_id =  db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  readStatus = db.Column(db.String(200), nullable=False)

  user = db.relationship("User", back_populates='read_status')
  books = db.relationship("Book", back_populates='read_status')

  def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'user_id': self.user_id,
            'readStatus': self.readStatus
        }
