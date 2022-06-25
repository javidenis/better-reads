from .db import db
from sqlalchemy.orm import relationship
class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(200), nullable=False)
    sub_heading = db.Column(db.String(500))
    description = db.Column(db.Text, nullable=False)
    cover_url = db.Column(db.Text, nullable=False)
    publish_date = db.Column(db.Date, nullable=False),
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='books') 
    readstatus = db.relationship("User", secondary='readstatues', back_populates='books')
    bookshelf = db.relationship("BookShelf", secondary='bookshelves')    
    # bookshelfbook = db.relationship('BookShelf', secondary='bookshelvesbooks', back_populates='books')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'sub_heading': self.sub_heading,
            'description': self.description,
            'cover_url': self.cover_url,
            'publish_date': self.publish_date
        }
