from .db import db
from sqlalchemy.orm import relationship
class BookShelf(db.Model):
  __tablename__ = 'bookshelves'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(200), nullable=False)
  user_id =  db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship("User", back_populates='bookshelves')
  book = db.relationship("Book", secondary='bookshelves')
  # bookshelfbook = db.relationship('Book', secondary='bookshelvesbooks', back_populates='bookshelves')

  def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id
        }
