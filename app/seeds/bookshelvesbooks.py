# from app.models import db
# from app.models.bookshelfbook import book_shelf_books

# def seed_bookshelvesbooks():
#   BookShelfBook1 = book_shelf_books.insert.values(book_id=1, bookshelf_id= 1)
#   # BookShelfBook2 = book_shelf_books(book_id=2, bookshelf_id= 2)
#   # BookShelfBook3 = book_shelf_books(book_id=3, bookshelf_id= 3)
#   # BookShelfBook4 = book_shelf_books(book_id=1, bookshelf_id= 2)

#   db.session.add(BookShelfBook1)
#   # db.session.add(BookShelfBook2)
#   # db.session.add(BookShelfBook3)
#   # db.session.add(BookShelfBook4)
  
#   db.session.commit()

# def undo_seedbookshelvesbooks():
#     db.session.execute('TRUNCATE bookshelvesbooks RESTART IDENTITY CASCADE;')
#     db.session.commit()
