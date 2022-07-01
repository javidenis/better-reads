from flask import session
from app.models import db, BookShelf, Book


def seed_bookshelves():
  books = Book.query.all() 


  bookshelf1 = BookShelf(name="Yang", user_id= 1, bookshelves_book=books)
  bookshelf2 = BookShelf(name="Eric ", user_id= 2, bookshelves_book=books)
  bookshelf3 = BookShelf(name="Stili ", user_id= 3, bookshelves_book=books)
  bookshelf4 = BookShelf(name="Denis ", user_id= 2, bookshelves_book=books)

  db.session.add(bookshelf1)
  db.session.add(bookshelf2)
  db.session.add(bookshelf3)
  db.session.add(bookshelf4)
  
  db.session.commit()

def undo_seedbookshelves():
    db.session.execute('TRUNCATE bookshelves RESTART IDENTITY CASCADE;')
    db.session.commit()
