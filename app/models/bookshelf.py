from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from .bookshelfbook import book_shelf_books


class BookShelf(db.Model):
  __tablename__ = 'bookshelves'

  if environment == "production":
        __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(200), nullable=False)
  user_id =  db.Column(db.Integer, db.ForeignKey(f'{SCHEMA}.users.id'), nullable=False)

  user = db.relationship("User", back_populates='bookshelves')
  
  bookshelves_book = db.relationship("Book",
            secondary=book_shelf_books,
            back_populates='book_bookshelves')


  def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'books': {book.id: book.to_dict() for book in self.bookshelves_book},
        }
