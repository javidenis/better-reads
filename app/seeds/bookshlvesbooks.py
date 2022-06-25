from app.models import db, BookShelfBook

def seed_bookshelvesbooks():
  BookShelfBook1 = BookShelfBook(book_id=1, bookshelf_id= 1)
  BookShelfBook2 = BookShelfBook(book_id=2, bookshelf_id= 2)
  BookShelfBook3 = BookShelfBook(book_id=3, bookshelf_id= 3)
  BookShelfBook4 = BookShelfBook(book_id=1, bookshelf_id= 2)

  db.session.add(BookShelfBook1)
  db.session.add(BookShelfBook2)
  db.session.add(BookShelfBook3)
  db.session.add(BookShelfBook4)
  
  db.session.commit()

def undo_seedbookshelvesbooks():
    db.session.execute('TRUNCATE bookshelvesbooks RESTART IDENTITY CASCADE;')
    db.session.commit()