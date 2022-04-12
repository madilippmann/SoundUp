from app.models import db, Genres


# Adds a demo user, you can add other users here if you want
def seed_genres():
    # TODO TODO TODO TODO TODO
    genre_1 = Genres()
    genre_2 = Genres()
    genre_3 = Genres()
    db.session.add(genre_1)
    db.session.add(genre_2)
    db.session.add(genre_3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_genres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
