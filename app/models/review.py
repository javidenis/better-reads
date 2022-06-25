from .db import db

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
  rating =  db.Column(db.Integer, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  content = db.Column(db.Text, nullable=False)

  user = db.relationship("User", back_populates='reviews')
  book = db.relationship("Book", back_populates='reviews')



  def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'user_id': self.user_id,
            'rating': self.rating,
            'content': self.content
        }
