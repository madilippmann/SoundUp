from app.models import db, Artist, Genre

def seed_artists_genres():
    # Artist 1
    genre1 = Genre.query.get(2)
    artist1 = Artist.query.get(1)
    genre1.artists.append(artist1)

    genre2 = Genre.query.get(3)
    artist2 = Artist.query.get(1)
    genre2.artists.append(artist2)

    genre3 = Genre.query.get(19)
    artist3 = Artist.query.get(1)
    genre3.artists.append(artist3)

    # Artist 2
    genre4 = Genre.query.get(26)
    artist4 = Artist.query.get(2)
    genre4.artists.append(artist4)

    genre5 = Genre.query.get(7)
    artist5 = Artist.query.get(2)
    genre5.artists.append(artist5)

    genre6 = Genre.query.get(13)
    artist6 = Artist.query.get(2)
    genre6.artists.append(artist6)

    # Artist 3
    genre7 = Genre.query.get(3)
    artist7 = Artist.query.get(3)
    genre7.artists.append(artist7)

    genre8 = Genre.query.get(26)
    artist8 = Artist.query.get(3)
    genre8.artists.append(artist8)

    genre11 = Genre.query.get(7)
    artist11 = Artist.query.get(3)
    genre11.artists.append(artist11)

    genre12 = Genre.query.get(25)
    artist12 = Artist.query.get(3)
    genre12.artists.append(artist12)

    # Artist 4
    genre13 = Genre.query.get(5)
    artist13 = Artist.query.get(4)
    genre13.artists.append(artist13)

    genre14 = Genre.query.get(28)
    artist14 = Artist.query.get(4)
    genre14.artists.append(artist14)

    # Artist 5
    genre15 = Genre.query.get(2)
    artist15 = Artist.query.get(5)
    genre15.artists.append(artist15)

    genre16 = Genre.query.get(1)
    artist16 = Artist.query.get(5)
    genre16.artists.append(artist16)

    # Artist 6
    genre17 = Genre.query.get(18)
    artist17 = Artist.query.get(6)
    genre17.artists.append(artist17)

    genre18 = Genre.query.get(9)
    artist18 = Artist.query.get(6)
    genre18.artists.append(artist18)

    genre19 = Genre.query.get(1)
    artist19 = Artist.query.get(6)
    genre19.artists.append(artist19)

    # Artist 7
    genre20 = Genre.query.get(5)
    artist20 = Artist.query.get(7)
    genre20.artists.append(artist20)

    genre21 = Genre.query.get(12)
    artist21 = Artist.query.get(7)
    genre21.artists.append(artist21)

    db.session.commit()



def undo_artists_genres():
    db.session.execute('TRUNCATE artists_genres RESTART IDENTITY CASCADE;')
    db.session.commit()
