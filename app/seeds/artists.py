from app.models import db, Artist
bio1 = '''Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dictum urna, non ultricies neque dapibus nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla lorem quam, interdum id enim sit amet, mattis sagittis elit. Maecenas at tincidunt lorem. Phasellus eu lacus sit amet enim aliquam interdum. Cras ornare iaculis nunc. In porttitor mi ex, convallis semper velit tincidunt non. Sed tempus quam tempor, lobortis risus quis, facilisis massa.

Quisque suscipit malesuada ex in scelerisque. Duis eget viverra tortor. Vestibulum malesuada tortor purus. Integer ultrices erat est, nec rutrum ante suscipit non. Nunc sollicitudin risus a quam convallis, in gravida ex ultricies. Donec vel rutrum lacus. Duis vulputate lorem eu erat finibus, quis hendrerit justo blandit. Proin quis arcu sapien. Phasellus hendrerit risus nec quam dictum, non vehicula enim efficitur. Duis sed blandit felis. Duis eu commodo lectus, sit amet tristique lacus. Donec dignissim convallis ligula vel sollicitudin. Duis in turpis eget tellus molestie facilisis. Quisque tempor, dolor at porttitor mattis, velit velit fermentum purus, eget semper tellus nulla sed eros.
'''
bio2 = 'Duis in felis tellus. Proin vel augue ut augue blandit cursus eu non nulla. Morbi in dolor fermentum, ullamcorper nisi ac, posuere diam. Nunc in felis eget turpis pharetra posuere vitae ut ex. Nullam placerat dui metus, in gravida urna volutpat vitae. Vestibulum et nibh tellus. Nulla facilisi.'
bio3 = 'Mauris tincidunt nibh et facilisis faucibus. Vestibulum eu dignissim leo. Nullam ut massa sit amet felis aliquam consectetur. Morbi dignissim imperdiet lacus nec porttitor. Maecenas ut libero velit. Mauris suscipit, massa ut mattis scelerisque, mi nulla tristique enim, vel placerat ligula nisi in massa. Etiam nec gravida ligula. Morbi non ipsum sed tortor finibus ultrices. Suspendisse dictum pretium sollicitudin. Proin convallis neque quis justo semper, at vulputate enim auctor. Vestibulum congue sapien libero. Donec viverra ipsum vel fringilla accumsan. Duis erat lacus, tristique sed lectus ac, volutpat ullamcorper sem. Phasellus vulputate sagittis justo sit amet tincidunt.'
bio4 = '''
Donec eu tellus laoreet, malesuada purus vitae, luctus turpis. Aenean fermentum ullamcorper quam ac dictum. Pellentesque ultricies eu elit eu venenatis. Morbi non leo tempor, rhoncus diam vitae, viverra felis. Pellentesque lectus leo, vestibulum nec ullamcorper ac, faucibus sed neque. Praesent aliquet ligula libero, eu bibendum risus viverra vehicula. Etiam auctor condimentum bibendum. Donec arcu magna, lacinia nec odio ac, malesuada convallis magna. Cras cursus ligula ipsum. Curabitur sodales, enim vel lacinia iaculis, erat elit pulvinar purus, ut consectetur enim est nec nisi. Sed congue facilisis lectus eget rhoncus.

Nulla euismod leo eget nibh sodales semper. Integer sed turpis in mi auctor porta. Proin ut placerat tortor, quis porta enim. Aliquam eget dui nunc. Ut mi mauris, tempus ut tincidunt vitae, venenatis vitae purus. Ut tincidunt tellus sit amet lacinia aliquet. Aenean suscipit tellus vitae velit sollicitudin vestibulum. Aliquam erat volutpat. Aenean in justo vel nisl viverra volutpat ac quis nisl. Morbi nec consequat sem. Fusce sollicitudin sit amet risus quis tempor. Suspendisse potenti.
'''
bio5 = '''Integer vitae placerat tortor. Donec molestie dolor finibus velit pharetra, at blandit ante finibus. Ut in libero libero. Maecenas non elit lacus. Nam cursus consectetur purus a elementum. Aenean nec orci eu arcu varius interdum tempus sed nunc. Mauris consectetur odio in dolor maximus placerat. Morbi congue arcu non convallis scelerisque.

Fusce sapien dolor, elementum at nibh venenatis, sodales auctor est. Proin ultricies porta sodales. Duis lobortis lorem in aliquam laoreet. Donec vitae erat nec libero auctor imperdiet. Nulla tempus leo vitae diam mollis, sed fermentum dolor suscipit. Vestibulum fringilla velit et turpis pulvinar sagittis. Vestibulum vestibulum ultricies nisl eu ullamcorper. Phasellus commodo felis sed mollis auctor. Phasellus luctus ac risus eget consectetur. Donec pulvinar ac quam eu accumsan.'''

bio6 = 'Phasellus malesuada, eros et gravida fermentum, sem sem consectetur tortor, hendrerit efficitur magna odio ut lorem. Aliquam in lacus et arcu convallis iaculis at in dui. Pellentesque blandit fringilla est. Donec vitae dapibus purus, vel scelerisque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut ultricies nulla. Nulla ac nibh mi. Pellentesque a pulvinar odio. Donec vitae accumsan ante. Fusce vestibulum condimentum justo sed gravida. Suspendisse aliquet velit nec nibh aliquam faucibus. Sed convallis, ipsum volutpat consequat bibendum, enim felis dictum massa, non condimentum ante ex ut orci. Integer a augue eget massa suscipit malesuada. In dapibus, lacus a scelerisque vestibulum, sem elit finibus mi, a finibus ex leo id lorem. Integer varius mattis elit, ullamcorper lacinia tellus condimentum non. Phasellus tempus, justo porttitor ornare accumsan, sapien magna iaculis est, et sagittis nunc libero a tellus.'

bio7 = 'Integer cursus dui nec turpis varius, nec aliquam justo venenatis. Curabitur semper eget ipsum nec eleifend. Etiam sollicitudin risus vel augue maximus, vitae congue sem faucibus. Sed sit amet felis at mi fermentum commodo non sed sapien. Cras venenatis consectetur neque viverra ornare.'

def seed_artists():
    artist_1 = Artist(
        # Electronic, DJ, Funk
        name='King Pink',
        bio=bio1,
        rate=400.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/king_pink.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy-abstract-beat-11254.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/sexy-fashion-beats-simulate-11176.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/chill-abstract-intention-12099.mp3'
    )

    artist_2 = Artist(
        # Rock, Alternative, Punk
        name='Little September',
        bio=bio2,
        rate=355.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/abstral-official-fnYHoNUJUNQ-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Sitting+In+Your+Head.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Little+Shoes.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Harmony.mp3'
    )
    # Electronic, Alternative, Rock, Experimental
    artist_3 = Artist(
        name='Flight of the Blue Lions',
        bio=bio3,
        rate=1200.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/marco-mons-DIXT8Z9p-Sg-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+Post+Yes.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+Saint+Wave.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+The+Army+Of+You.mp3'
    )

    artist_4 = Artist(
        # Piano, Classical
        name='Sam Dee Bright',
        bio=bio4,
        rate=175.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/james-zwadlo-nj0vGyFB2nY-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Nocturne+in+B+flat+minor%2C+Op.+9+no.+1.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Arabesque+No.+1.+Andantino+con+moto.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Ballade+no.+1+in+G+minor%2C+Op.+23.mp3'
    )

    artist_5 = Artist(
        # Pop, Singer/Songwriter
        name='Taylor Blade',
        bio=bio5,
        rate=105.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jakayla-toney-_SUo0bFBMRc-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Jenna+Jay+-+Someone+Real+-+Jenna+Jay.mp3',
    )

    artist_6 = Artist(
        # Indie, Folk, Singer/Songwriter
        name='Drew Apollo',
        bio=bio6,
        rate=75.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/ben-collins-Fr2iwKpsi-Y-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/HoliznaCC0+-+Astronaut.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/HoliznaCC0+-+Highway+Fever.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/HoliznaCC0+-+A+Small+Town+on+Pluto+(Family+Vacation).mp3',
    )


    artist_7 = Artist(
        # Classical, String Quartet
        name='The Lost Quartet',
        bio=bio7,
        rate=800,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/johanna-vogt-H7kVzJgum3M-unsplash+(1).jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/I.+Allegro+ma+non+troppo.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/String+Quartet+no.+2+in+D+Major+-+I.+Allegro+moderato.mp3',
    )

    db.session.add(artist_1)
    db.session.add(artist_2)
    db.session.add(artist_3)
    db.session.add(artist_4)
    db.session.add(artist_5)
    db.session.add(artist_6)
    db.session.add(artist_7)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
