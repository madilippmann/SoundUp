from app.models import db, Booking
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_bookings():

    booking_1 = Booking(
        user_id=1,
        artist_id=5,
        description='Pellentesque id nibh tortor id aliquet lectus proin. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Facilisis sed odio morbi quis commodo odio aenean. Arcu dictum varius duis at consectetur lorem donec. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Mauris pellentesque pulvinar pellentesque habitant. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Gravida rutrum quisque non tellus orci ac. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Eget est lorem ipsum dolor sit amet consectetur. Scelerisque purus semper eget duis at tellus at urna condimentum. Etiam tempor orci eu lobortis elementum nibh.',
        date=datetime(2022, 11, 28, 16, 30),
        confirmed=True
    )
    booking_2 = Booking(
        user_id=1,
        artist_id=2,
        description='Nunc faucibus a pellentesque sit amet. Lacinia quis vel eros donec ac. ',
        date=datetime(2022, 7, 2, 18),
        confirmed=True
    )
    booking_3 = Booking(
        user_id=1,
        artist_id=4,
        description='Tincidunt vitae semper quis lectus nulla. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. ',
        date=datetime(2022, 9, 5, 13),
        confirmed=True
    )
    booking_4 = Booking(
        user_id=1,
        artist_id=4,
        description='Tincidunt vitae semper quis lectus nulla. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. ',
        date=datetime(2022, 9, 6, 13),
        confirmed=True
    )
    booking_5 = Booking(
        user_id=1,
        artist_id=1,
        description='Mauris a diam maecenas sed enim. Sodales neque sodales ut etiam sit amet nisl purus in. Sem nulla pharetra diam sit.',
        date=datetime(2022, 10, 15, 16, 30),
        confirmed=True
    )
    booking_6 = Booking(
        user_id=1,
        artist_id=6,
        description='Nisi vitae suscipit tellus mauris a.',
        date=datetime(2021, 12, 10, 15, 45),
        confirmed=True
    )

    db.session.add(booking_1)
    db.session.add(booking_2)
    db.session.add(booking_3)
    db.session.add(booking_4)
    db.session.add(booking_5)
    db.session.add(booking_6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
