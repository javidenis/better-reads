from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', picture_url = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', name='Demo-lition', bio='I am the first test user.')

    stili = User(
        username='Stili', email='stili@aa.io', password='password', picture_url = 'https://images.avvo.com/avvo/ugc/images/head_shot/standard/lawyer_andrew_stilinovic_4797224_1522963435.jpg', name='Test User 1', bio='I am the second test user.')

    eric = User(
        username='Eric', email='eric@aa.io', password='password', picture_url ='https://ca.slack-edge.com/T03GU501J-U032DHC0TJ5-934f7a79f795-512', name='Test User 2', bio='I am the third test user.')

    jorge = User(
        username='Jorge', email='jorge@aa.io', password='password', picture_url ='https://www.yoh.com/hubfs/Thoughtful%20young%20programmer%20coding%20on%20computer%20in%20the%20evening%20at%20home.jpeg', name='Test User 3', bio='I am the fourth test user.')


    db.session.add(demo)
    db.session.add(stili)
    db.session.add(eric)
    db.session.add(jorge)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
