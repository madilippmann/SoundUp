from app.models import db, Artist


# Adds a demo user, you can add other users here if you want
def seed_artists():
    # TODO TODO TODO TODO TODO
    artist_1 = Artist()
    artist_2 = Artist()
    artist_3 = Artist()
    db.session.add(artist_1)
    db.session.add(artist_2)
    db.session.add(artist_3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
