from .db import db
from ..models import Book
from ..models import BookShelf

from sqlalchemy.orm import relationship, backref

class BookShelfBook(db.Model):
  __tablename__ = 'bookshelvesbooks'

  id = db.Column(db.Integer, primary_key=True)
  book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
  bookshelf_id =  db.Column(db.Integer, db.ForeignKey('bookshelves.id'), nullable=False)

  user = db.relationship(Book, backref=backref("bookshelvesbooks", cascade="all, delete-orphan"))
  product = db.relationship(BookShelf, backref=backref("bookshelvesbooks", cascade="all, delete-orphan"))

  def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'bookshelf_id': self.bookshelf_id
       
        }