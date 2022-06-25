from app.models import db, Genre

def seed_genres():
  genre1 = Genre(name='Fantasy')
  genre2 = Genre(name='Adventure')
  genre3 = Genre(name='History')
  genre4 = Genre(name='Science Fiction')

  db.session.add(genre1)
  db.session.add(genre2)
  db.session.add(genre3)
  db.session.add(genre4)
  
  db.session.commit()

def undo_seedgenres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
