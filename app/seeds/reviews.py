from app.models import db, Review

def seed_reviews():
  review1 = Review(book_id=1, rating=4, user_id= 1, content='This was a good book')
  review2 =  Review(book_id=2, rating=4, user_id= 2, content='This was a good book')
  review3 =  Review(book_id=3, rating=4, user_id= 3, content='This was a good book')
  review4 =  Review(book_id=4, rating=4, user_id= 2, content="This was a good book")
  review5 =  Review(book_id=5, rating=4, user_id= 2, content="I really enjoyed the book. It was a wonderful read, and I couldn't put it down. The ending left me with many unanswered questions but I will definitely be looking forward to hearing more about the novel in the future.")
  review6 =  Review(book_id=6, rating=4, user_id= 2, content="You won't be able to put it down. I read the book in a day because I simply couldn't stop myself. The plot is exciting and fast paced, making for a gripping read.")
  review7 =  Review(book_id=7, rating=4, user_id= 2, content=("I read How to Tell a Story's book and I can honestly say that it was one of the best books I have ever read. It has great, easy to follow instructions and deep insights into the art of story telling. I would recommend this book for anyone who wants to learn how to tell a story, or is just interested in the process."))
  review8 =  Review(book_id=8, rating=4, user_id= 2, content="This book is a must-read for anyone wanting to learn the art of storytelling. The author goes into detail about how to create stories and then shares many examples from famous authors. I would recommend it to anyone looking to improve their writing skills, and I can't wait to incorporate what I've learned in my own writing!")
  review9 =  Review(book_id=9, rating=4, user_id= 2, content="I loved We Were Dreamers because it is so inspiring and beautifully written. The story of two siblings who are trying to make a difference in their world, even if it means being different. It was heartwarming to see the bond that the two had with each other and how they would do anything for each other. I had a hard time putting this book down because I wanted")

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  db.session.add(review5)
  db.session.add(review6)
  db.session.add(review7)
  db.session.add(review8)
  db.session.add(review9)
  
  db.session.commit()

def undo_seedreviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
