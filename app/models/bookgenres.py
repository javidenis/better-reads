from .db import db, environment, SCHEMA, add_prefix_for_prod

book_genres = db.Table(
  "bookgenres",
  db.Model.metadata,
  db.Column("genreId", db.Integer, db.ForeignKey(f'{SCHEMA}.genres.id'), primary_key=True),
  db.Column("bookId", db.Integer, db.ForeignKey(f'{SCHEMA}.books.id'), primary_key=True)
)
if environment == "production":
    book_genres.schema = SCHEMA