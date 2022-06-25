from .db import db

book_genres = db.Table(
  "bookgenres",
  db.Model.metadata,
  db.Column("genreId", db.Integer, db.ForeignKey('genres.id'), primary_key=True),
  db.Column("bookId", db.Integer, db.ForeignKey('books.id'), primary_key=True)
)
