from .db import db

book_shelf_books = db.Table(
  "bookshelfbooks",
  db.Model.metadata,
  db.Column("bookshelfId", db.Integer, db.ForeignKey('bookshelves.id'), primary_key=True),
  db.Column("bookId", db.Integer, db.ForeignKey('books.id'), primary_key=True)
)
