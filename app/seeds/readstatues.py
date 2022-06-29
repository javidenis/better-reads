from app.models import db, ReadStatus

def seed_readstatues():
  ReadStatus1 = ReadStatus(book_id=1, user_id= 1, readStatus="Read")
  ReadStatus2 = ReadStatus(book_id=2, user_id= 2, readStatus="Want to Read")
  ReadStatus3 = ReadStatus(book_id=3, user_id= 3, readStatus="Read")
  ReadStatus4 = ReadStatus(book_id=2, user_id= 2, readStatus="Currently Reading")

  db.session.add(ReadStatus1)
  db.session.add(ReadStatus2)
  db.session.add(ReadStatus3)
  db.session.add(ReadStatus4)
  
  db.session.commit()

def undo_seedreadstatues():
    db.session.execute('TRUNCATE readstatues RESTART IDENTITY CASCADE;')
    db.session.commit()
