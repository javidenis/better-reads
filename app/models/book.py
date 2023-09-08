from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from .bookshelfbook import book_shelf_books
from .bookgenres import book_genres



class Book(db.Model):
    __tablename__ = 'books'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(200), nullable=False)
    sub_heading = db.Column(db.String(500))
    description = db.Column(db.Text, nullable=False)
    cover_url = db.Column(db.Text, nullable=False)
    publish_date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(f'{SCHEMA}.users.id'), nullable=False)

    user = db.relationship("User", back_populates='books')
    read_status = db.relationship("ReadStatus", back_populates='books', cascade="delete, all")
    reviews = db.relationship("Review", back_populates='book',cascade="delete, all")

    book_bookshelves = db.relationship("BookShelf",
                secondary=book_shelf_books,
                back_populates='bookshelves_book',
                lazy="joined")

    books_genre = db.relationship("Genre",
                    secondary=book_genres,
                    back_populates='genre_books',
                    lazy="joined",
                )



    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'sub_heading': self.sub_heading,
            'description': self.description,
            'cover_url': self.cover_url,
            'publish_date': self.publish_date,
            'books_genre' : [genre.to_dict() for genre in self.books_genre],
            # 'book_bookshelves': [bookshelf.to_dict() for bookshelf in self.book_bookshelves],
            'user_id': self.user_id
        }
