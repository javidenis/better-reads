from .db import db, environment, SCHEMA, add_prefix_for_prod

class ReadStatus(db.Model):
  __tablename__ = 'readstatues'

  if environment == "production":
        __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  book_id = db.Column(db.Integer, db.ForeignKey(f'{SCHEMA}.books.id'), nullable=False)
  user_id =  db.Column(db.Integer, db.ForeignKey(f'{SCHEMA}.users.id'), nullable=False)
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
