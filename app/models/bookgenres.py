from .db import db, environment, SCHEMA, add_prefix_for_prod

book_genres = db.Table(
  "bookgenres",
  db.Model.metadata,
  db.Column("genreId", db.Integer, db.ForeignKey(add_prefix_for_prod('genres.id'))),
  db.Column("bookId", db.Integer, db.ForeignKey(add_prefix_for_prod('books.id')))
)
if environment == "production":
    book_genres.schema = SCHEMA