from app.models import db, Artist, Genre

def seed_artists_genres():
    # Genre.query.get(1).artists.append(Artist.query.get(2))
    genre1 = Genre.query.get(1)
    artist1 = Artist.query.get(2)
    genre1.artists.append(artist1)

    # Genre.query.get(2).artists.append(Artist.query.get(6))
    genre2 = Genre.query.get(1)
    artist2 = Artist.query.get(6)
    genre2.artists.append(artist2)

    # Genre.query.get(3).artists.append(Artist.query.get(1))
    genre3 = Genre.query.get(2)
    artist3 = Artist.query.get(1)
    genre3.artists.append(artist3)

    # Genre.query.get(4).artists.append(Artist.query.get(5))
    genre4 = Genre.query.get(4)
    artist4 = Artist.query.get(4)
    genre4.artists.append(artist4)

    # Genre.query.get(1).artists.append(Artist.query.get(4))
    genre5 = Genre.query.get(1)
    artist5 = Artist.query.get(4)
    genre5.artists.append(artist5)


    genre6 = Genre.query.get(3)
    artist6 = Artist.query.get(3)
    genre6.artists.append(artist6)

    # Genre.query.get(1).artists.append(Artist.query.get(3))
    genre7 = Genre.query.get(1)
    artist7 = Artist.query.get(3)
    genre7.artists.append(artist7)

    # Genre.query.get(4).artists.append(Artist.query.get(7))
    genre8 = Genre.query.get(1)
    artist8 = Artist.query.get(7)
    genre8.artists.append(artist8)

    # Genre.query.get(5).artists.append(Artist.query.get(7))
    genre11 = Genre.query.get(7)
    artist11 = Artist.query.get(7)
    genre11.artists.append(artist11)

    # Genre.query.get(1).artists.append(Artist.query.get(5))
    genre12 = Genre.query.get(1)
    artist12 = Artist.query.get(5)
    genre12.artists.append(artist12)

    # Genre.query.get(6).artists.append(Artist.query.get(5))
    genre13 = Genre.query.get(6)
    artist13 = Artist.query.get(5)
    genre13.artists.append(artist13)

    # Genre.query.get(1).artists.append(Artist.query.get(2))
    genre14 = Genre.query.get(1)
    artist14 = Artist.query.get(1)
    genre14.artists.append(artist14)

    genre15 = Genre.query.get(3)
    artist15 = Artist.query.get(2)
    genre15.artists.append(artist15)

    genre16 = Genre.query.get(4)
    artist16 = Artist.query.get(2)
    genre16.artists.append(artist16)

    genre18 = Genre.query.get(5)
    artist18 = Artist.query.get(6)
    genre18.artists.append(artist18)


    db.session.commit()



def undo_artists_genres():
    db.session.execute('TRUNCATE artists_genres RESTART IDENTITY CASCADE;')
    db.session.commit()
