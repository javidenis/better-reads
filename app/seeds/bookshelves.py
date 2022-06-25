from app.models import db, BookShelf

def seed_bookshelves():
  bookshelf1 = BookShelf(name="Yang", user_id= 1)
  bookshelf2 = BookShelf(name="Eric ", user_id= 2)
  bookshelf3 = BookShelf(name="Stili ", user_id= 3)
  bookshelf4 = BookShelf(name="Dennis ", user_id= 2)

  db.session.add(bookshelf1)
  db.session.add(bookshelf2)
  db.session.add(bookshelf3)
  db.session.add(bookshelf4)
  
  db.session.commit()

def undo_seedbookshelves():
    db.session.execute('TRUNCATE bookshelves RESTART IDENTITY CASCADE;')
    db.session.commit()