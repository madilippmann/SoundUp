from app.models import db, Genre


# Adds a demo user, you can add other users here if you want
def seed_genres():

    genre_1 = Genre(name='Singer/Songwriter')
    genre_2 = Genre(name='Pop')
    genre_3 = Genre(name='Electronic')
    genre_4 = Genre(name='DJ')
    genre_5 = Genre(name='Classical')
    genre_6 = Genre(name='Cover')
    genre_7 = Genre(name='Rock')
    genre_8 = Genre(name='Blues')
    genre_9 = Genre(name='Folk')
    genre_10 = Genre(name='Musical Theater')
    genre_11 = Genre(name='Opera')
    genre_12 = Genre(name='String Quartet')
    genre_13 = Genre(name='Punk')
    genre_14 = Genre(name='Hip-hop')
    genre_15 = Genre(name='Country')
    genre_16 = Genre(name='Metal')
    genre_17 = Genre(name='Piano/Vocal')
    genre_18 = Genre(name='Indie')
    genre_19 = Genre(name='Funk')
    genre_20 = Genre(name='R&B')
    genre_21 = Genre(name='Disco')
    genre_22 = Genre(name='Techno')
    genre_23 = Genre(name='Reggae')
    genre_24 = Genre(name='Jazz')
    genre_25 = Genre(name='Experimental')

    db.session.add(genre_1)
    db.session.add(genre_2)
    db.session.add(genre_3)
    db.session.add(genre_4)
    db.session.add(genre_5)
    db.session.add(genre_6)
    db.session.add(genre_7)
    db.session.add(genre_8)
    db.session.add(genre_9)
    db.session.add(genre_10)
    db.session.add(genre_11)
    db.session.add(genre_12)
    db.session.add(genre_13)
    db.session.add(genre_14)
    db.session.add(genre_15)
    db.session.add(genre_16)
    db.session.add(genre_17)
    db.session.add(genre_18)
    db.session.add(genre_19)
    db.session.add(genre_20)
    db.session.add(genre_21)
    db.session.add(genre_22)
    db.session.add(genre_23)
    db.session.add(genre_24)
    db.session.add(genre_25)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_genres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
