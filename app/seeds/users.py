from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Demo User', email='demo@aa.io', password='password')
    marnie = User(
        name='Marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        name='Bobbie', email='bobbie@aa.io', password='password')

    user_1 = User(
            name='Joelle Brekke', email='Jaiden.Bernier39@hotmail.com', password='password')
    user_2 = User(
            name='Noemie Stoltenberg', email='Elvera77@yahoo.com', password='password')
    user_3 = User(
            name='Lula Langosh', email='Amira.Dickinson@gmail.com', password='password')
    user_4 = User(
            name='Freida Wintheiser', email='Maye.Veum@hotmail.com', password='password')
    user_5 = User(
            name='Raphaelle Langosh', email='Lenore6@yahoo.com', password='password')
    user_6 = User(
            name='Ross Oberbrunner', email='Lori.Leannon@gmail.com', password='password')
    user_7 = User(
            name='Reanna Wolff', email='Lorenzo77@hotmail.com', password='password')
    user_8 = User(
            name='Alberta McKenzie', email='Tracey_Sipes80@gmail.com', password='password')
    user_9 = User(
            name='Rodger Howe', email='Edythe_Larkin@yahoo.com', password='password')
    user_10 = User(
            name='Tristian Parker', email='Gustave_Yundt@gmail.com', password='password')
    user_11 = User(
            name='Makayla Miller', email='Zachary_Wuckert@hotmail.com', password='password')
    user_12 = User(
            name='Beth Ratke', email='Cleta.Nicolas23@hotmail.com', password='password')
    user_13 = User(
            name='Dwight Durgan', email='Monserrat.Smitham48@gmail.com', password='password')
    user_14 = User(
            name='Alvera Rau', email='Stanford_Wolff72@gmail.com', password='password')
    user_15 = User(
            name='Candido Spinka', email='Leonie86@yahoo.com', password='password')
    user_16 = User(
            name='Janiya Rolfson', email='Jesse70@hotmail.com', password='password')
    user_17 = User(
            name='Thelma Goyette', email='Kariane_Breitenberg83@yahoo.com', password='password')
    user_18 = User(
            name='Sienna Batz', email='Erik86@gmail.com', password='password')
    user_19 = User(
            name='Justice Treutel', email='Heather49@hotmail.com', password='password')
    user_20 = User(
            name='Helga Rutherford', email='Audrey.Daniel30@hotmail.com', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(user_1)
    db.session.add(user_2)
    db.session.add(user_3)
    db.session.add(user_4)
    db.session.add(user_5)
    db.session.add(user_6)
    db.session.add(user_7)
    db.session.add(user_8)
    db.session.add(user_9)
    db.session.add(user_10)
    db.session.add(user_12)
    db.session.add(user_12)
    db.session.add(user_13)
    db.session.add(user_14)
    db.session.add(user_15)
    db.session.add(user_16)
    db.session.add(user_17)
    db.session.add(user_18)
    db.session.add(user_19)
    db.session.add(user_20)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
