from .db import db, environment, SCHEMA, add_prefix_for_prod

book_shelf_books = db.Table(
  "bookshelfbooks",
  db.Model.metadata,
  db.Column("bookshelfId", db.Integer, db.ForeignKey(add_prefix_for_prod('bookshelves.id'))),
  db.Column("bookId", db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')))
)

if environment == "production":
    book_shelf_books.schema = SCHEMA
