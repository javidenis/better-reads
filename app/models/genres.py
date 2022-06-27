from .db import db
from. bookgenres import book_genres

class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)

    genre_books = db.relationship("Book",
                secondary=book_genres,
                back_populates='books_genre'
                )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
