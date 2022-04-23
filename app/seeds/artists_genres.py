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

    # Artist 8
    genre22 = Genre.query.get(24)
    artist22 = Artist.query.get(8)
    genre22.artists.append(artist22)

    genre23 = Genre.query.get(29)
    artist23 = Artist.query.get(8)
    genre23.artists.append(artist23)


    # Artist 9
    genre24 = Genre.query.get(5)
    artist24 = Artist.query.get(9)
    genre24.artists.append(artist24)

    genre25 = Genre.query.get(30)
    artist25 = Artist.query.get(9)
    genre25.artists.append(artist25)

    # Artist 10
    genre26 = Genre.query.get(5)
    artist26 = Artist.query.get(10)
    genre26.artists.append(artist26)

    genre27 = Genre.query.get(31)
    artist27 = Artist.query.get(10)
    genre27.artists.append(artist27)

    # Artist 11
    genre28 = Genre.query.get(5)
    artist28 = Artist.query.get(11)
    genre28.artists.append(artist28)

    genre29 = Genre.query.get(32)
    artist29 = Artist.query.get(11)
    genre29.artists.append(artist29)

    # Artist 12
    genre30 = Genre.query.get(5)
    artist30 = Artist.query.get(12)
    genre30.artists.append(artist30)

    genre31 = Genre.query.get(32)
    artist31 = Artist.query.get(12)
    genre31.artists.append(artist31)

    # Artist 13
    genre32 = Genre.query.get(15)
    artist32 = Artist.query.get(13)
    genre32.artists.append(artist32)

    genre33 = Genre.query.get(1)
    artist33 = Artist.query.get(13)
    genre33.artists.append(artist33)

    genre34 = Genre.query.get(9)
    artist34 = Artist.query.get(13)
    genre34.artists.append(artist34)

    # Artist 14
    genre35 = Genre.query.get(3)
    artist35 = Artist.query.get(14)
    genre35.artists.append(artist35)

    genre36 = Genre.query.get(19)
    artist36 = Artist.query.get(14)
    genre36.artists.append(artist36)

    # Artist 15
    genre37 = Genre.query.get(3)
    artist37 = Artist.query.get(15)
    genre37.artists.append(artist37)

    genre38 = Genre.query.get(19)
    artist38 = Artist.query.get(15)
    genre38.artists.append(artist38)

    # Artist 16
    genre39 = Genre.query.get(5)
    artist39 = Artist.query.get(16)
    genre39.artists.append(artist39)

    genre40 = Genre.query.get(33)
    artist40 = Artist.query.get(16)
    genre40.artists.append(artist40)

    # Artist 17
    genre41 = Genre.query.get(5)
    artist41 = Artist.query.get(17)
    genre41.artists.append(artist41)

    genre42 = Genre.query.get(33)
    artist42 = Artist.query.get(17)
    genre42.artists.append(artist42)


    # Artist 18
    genre43 = Genre.query.get(14)
    artist43 = Artist.query.get(18)
    genre43.artists.append(artist43)

    genre44 = Genre.query.get(34)
    artist44 = Artist.query.get(18)
    genre44.artists.append(artist44)


    # Artist 19
    genre45 = Genre.query.get(24)
    artist45 = Artist.query.get(19)
    genre45.artists.append(artist45)

    # Artist 20
    genre46 = Genre.query.get(24)
    artist46 = Artist.query.get(20)
    genre46.artists.append(artist46)

    # Artist 21
    genre47 = Genre.query.get(24)
    artist47 = Artist.query.get(21)
    genre47.artists.append(artist47)


    # Artist 22
    genre48 = Genre.query.get(3)
    artist48 = Artist.query.get(22)
    genre48.artists.append(artist48)

    genre49 = Genre.query.get(4)
    artist49 = Artist.query.get(22)
    genre49.artists.append(artist49)

    genre50 = Genre.query.get(24)
    artist50 = Artist.query.get(22)
    genre50.artists.append(artist50)

    # Artist 23
    genre51 = Genre.query.get(3)
    artist51 = Artist.query.get(23)
    genre51.artists.append(artist51)

    genre52 = Genre.query.get(4)
    artist52 = Artist.query.get(23)
    genre52.artists.append(artist52)

    genre53 = Genre.query.get(24)
    artist53 = Artist.query.get(23)
    genre53.artists.append(artist53)

    # Artist 24
    genre54 = Genre.query.get(3)
    artist54 = Artist.query.get(24)
    genre54.artists.append(artist54)

    genre55 = Genre.query.get(4)
    artist55 = Artist.query.get(24)
    genre55.artists.append(artist55)

    genre56 = Genre.query.get(24)
    artist56 = Artist.query.get(24)
    genre56.artists.append(artist56)

    # Artist 25
    genre57 = Genre.query.get(20)
    artist57 = Artist.query.get(25)
    genre57.artists.append(artist57)

    # Artist 26
    genre58 = Genre.query.get(5)
    artist58 = Artist.query.get(26)
    genre58.artists.append(artist58)

    genre59 = Genre.query.get(28)
    artist59 = Artist.query.get(26)
    genre59.artists.append(artist59)

    # Artist 27
    genre60 = Genre.query.get(5)
    artist60 = Artist.query.get(27)
    genre60.artists.append(artist60)

    genre61 = Genre.query.get(28)
    artist61 = Artist.query.get(27)
    genre61.artists.append(artist61)

    # Artist 28
    genre62 = Genre.query.get(5)
    artist62 = Artist.query.get(28)
    genre62.artists.append(artist62)

    genre63 = Genre.query.get(28)
    artist63 = Artist.query.get(28)
    genre63.artists.append(artist63)

    # Artist 29
    genre64 = Genre.query.get(5)
    artist64 = Artist.query.get(29)
    genre64.artists.append(artist64)

    genre65 = Genre.query.get(28)
    artist65 = Artist.query.get(29)
    genre65.artists.append(artist65)

    # Artist 30
    genre66 = Genre.query.get(5)
    artist66 = Artist.query.get(30)
    genre66.artists.append(artist66)

    genre67 = Genre.query.get(28)
    artist67 = Artist.query.get(30)
    genre67.artists.append(artist67)

    # Artist 31
    genre68 = Genre.query.get(5)
    artist68 = Artist.query.get(31)
    genre68.artists.append(artist68)

    genre69 = Genre.query.get(28)
    artist69 = Artist.query.get(31)
    genre69.artists.append(artist69)


    # Artist 32
    genre70 = Genre.query.get(2)
    artist70 = Artist.query.get(32)
    genre70.artists.append(artist70)

    genre71 = Genre.query.get(35)
    artist71 = Artist.query.get(32)
    genre71.artists.append(artist71)

    genre72 = Genre.query.get(3)
    artist72 = Artist.query.get(32)
    genre72.artists.append(artist72)

    # Artist 33
    genre73 = Genre.query.get(5)
    artist73 = Artist.query.get(33)
    genre73.artists.append(artist73)

    genre74 = Genre.query.get(36)
    artist74 = Artist.query.get(33)
    genre74.artists.append(artist74)

    # Artist 34
    genre75 = Genre.query.get(5)
    artist75 = Artist.query.get(34)
    genre75.artists.append(artist75)

    genre76 = Genre.query.get(36)
    artist76 = Artist.query.get(34)
    genre76.artists.append(artist76)

    # Artist 35
    genre77 = Genre.query.get(5)
    artist77 = Artist.query.get(35)
    genre77.artists.append(artist77)

    genre78 = Genre.query.get(36)
    artist78 = Artist.query.get(35)
    genre78.artists.append(artist78)









    db.session.commit()




def undo_artists_genres():
    db.session.execute('TRUNCATE artists_genres RESTART IDENTITY CASCADE;')
    db.session.commit()
