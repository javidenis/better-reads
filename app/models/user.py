from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    picture_url = db.Column(db.Text, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.Text)

    books = db.relationship("Book", back_populates='user')
    bookshelves = db.relationship("BookShelf", back_populates='user')
    read_status = db.relationship('ReadStatus', back_populates='user')
    reviews = db.relationship('Review', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'name': self.name,
            'bio': self.bio,
            'picture_url': self.picture_url
        }
