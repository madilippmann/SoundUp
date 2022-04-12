from app.models import db, Booking


# Adds a demo user, you can add other users here if you want
def seed_bookings():
    # TODO TODO TODO TODO TODO
    booking_1 = Booking()
    booking_2 = Booking()
    booking_3 = Booking()
    db.session.add(booking_1)
    db.session.add(booking_2)
    db.session.add(booking_3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
