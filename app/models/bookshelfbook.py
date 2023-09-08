from .db import db, environment, SCHEMA, add_prefix_for_prod

book_shelf_books = db.Table(
  "bookshelfbooks",
  db.Model.metadata,
  db.Column("bookshelfId", db.Integer, db.ForeignKey(f'{SCHEMA}.bookshelves.id'), primary_key=True),
  db.Column("bookId", db.Integer, db.ForeignKey(f'{SCHEMA}.books.id'), primary_key=True)
)

if environment == "production":
    book_shelf_books.schema = SCHEMA
