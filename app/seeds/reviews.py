from app.models import db, Review

def seed_reviews():
  review1 = Review(book_id=1, rating=4, user_id= 1, content='This was a good book')
  review2 =  Review(book_id=1, rating=4, user_id= 2, content='This was a good book')
  review3 =  Review(book_id=1, rating=4, user_id= 3, content='This was a good book')
  review4 =  Review(book_id=1, rating=4, user_id= 1, content='This was a good book')

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  
  db.session.commit()

def undo_seedreviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
