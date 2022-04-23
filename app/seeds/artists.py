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
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/chill-abstract-intention-12099.mp3',
        audio_track_name_1='90s Motion',
        audio_track_name_2='Unexpected Resistance',
        audio_track_name_3='Chill Ends'
    )

    artist_2 = Artist(
        # Rock, Alternative, Punk
        name='Little September',
        bio=bio2,
        rate=355.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/abstral-official-fnYHoNUJUNQ-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Sitting+In+Your+Head.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Little+Shoes.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Le+Volume+Courbe+-+Harmony.mp3',
        audio_track_name_1='Sitting In Your Head',
        audio_track_name_2='Little Shoes',
        audio_track_name_3='Harmony'
    )
    # Electronic, Alternative, Rock, Experimental
    artist_3 = Artist(
        name='Flight of the Blue Lions',
        bio=bio3,
        rate=1200.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/marco-mons-DIXT8Z9p-Sg-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+Post+Yes.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+Saint+Wave.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Soft+and+Furious+-+The+Army+Of+You.mp3',
        audio_track_name_1='Post Yes',
        audio_track_name_2='Saint Wave',
        audio_track_name_3='This Army of You'
    )

    artist_4 = Artist(
        # Piano, Classical
        name='Sam Dee Bright',
        bio=bio4,
        rate=175.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/james-zwadlo-nj0vGyFB2nY-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Nocturne+in+B+flat+minor%2C+Op.+9+no.+1.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Arabesque+No.+1.+Andantino+con+moto.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Ballade+no.+1+in+G+minor%2C+Op.+23.mp3',
        audio_track_name_1='Nocturne in B-flat minor Op. 9',
        audio_track_name_2='Arabesque No. 1 Andantino con moto',
        audio_track_name_3='Ballade No. 1 in G minor'
    )

    artist_5 = Artist(
        # Pop, Singer/Songwriter
        name='Taylor Blade',
        bio=bio5,
        rate=105.00,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jakayla-toney-_SUo0bFBMRc-unsplash.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/Jenna+Jay+-+Someone+Real+-+Jenna+Jay.mp3',
        audio_track_name_1='Someone Real',
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
        audio_track_name_1='Astronaut',
        audio_track_name_2='Highway Fever',
        audio_track_name_3='A Small Town on Pluto'
    )


    artist_7 = Artist(
        # Classical, String Quartet
        name='The Lost Quartet',
        bio=bio7,
        rate=800,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/johanna-vogt-H7kVzJgum3M-unsplash+(1).jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/I.+Allegro+ma+non+troppo.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/String+Quartet+no.+2+in+D+Major+-+I.+Allegro+moderato.mp3',
        audio_track_name_1='Movement I - Allegro ma non troppo',
        audio_track_name_2='String Quartet No. 2 in D Major',

    )

    artist_8 = Artist(
        # BRASS BAND
        # GENRES Jazz, Big Band
        name="Elliot's Midnight Preachers",
        bio=bio1,
        rate=750,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/brass_band.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/U.S.+Army+Blues+-+Barbara.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/U.S.+Army+Blues+-+Walk+That+Dog.mp3',
        audio_track_name_1='Barbara',
        audio_track_name_2='Walk that Dog',
    )


    artist_9 = Artist(
        # CELLIST
        # Classical, Cello
        name='Avery Lynn',
        bio=bio2,
        rate=180,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/cellist_1.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/cellist_1/IMSLP718221-PMLP164351-01.02._Suite_No._3_In_C_Major%2C_BWV.1008_For_'Cello_Unaccompanied-_2nd_Movement-_Allemande.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/cellist_1/IMSLP718225-PMLP164351-01.06._Suite_No._3_In_C_Major%2C_BWV.1008_For_'Cello_Unaccompanied-_6th_Movement-_Gigue+(1).mp3",
        audio_track_name_1='Suite No. 3 in C Major - 2nd Movement - Allemande',
        audio_track_name_2='Suite No. 3 in C Major - 6th Movement - Gigue',
    )

    artist_10 = Artist(
        # Classical, clarinet
        name='Elias Cooper',
        bio=bio3,
        rate=120,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/clarinet_2.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/clarinetist/IMSLP717118-PMLP52918-01.04._Sonata_In_F_Minor_For_Clarinet_And_Piano%2C_Op._120%2C_No._1-_Vivace.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/clarinetist/IMSLP717116-PMLP52918-01.02._Sonata_In_F_Minor_For_Clarinet_And_Piano%2C_Op._120%2C_No._1-_Andante_Un_Poco_Adagio.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/clarinetist/IMSLP717115-PMLP52918-01.01._Sonata_In_F_Minor_For_Clarinet_And_Piano%2C_Op._120%2C_No._1-_Allegro_Appassionato.mp3",
        audio_track_name_1="Op. 120 No.1 - Vivace",
        audio_track_name_2="Op. 120 No.1 - Andante Un Poco Adagio",
        audio_track_name_3="Op. 120 No.1 - Allegro Appassionato",
    )



    artist_11 = Artist(
        # GENRES classical, guitar
        name='Carol Clay',
        bio=bio4,
        rate=150,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/guitarist_1.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/guitar/Monplaisir+-+H%C3%A9lice.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/guitar/Monplaisir+-+Juillet.mp3",
        audio_track_name_1='Hélice',
        audio_track_name_2='Juillet',
    )

    artist_12 = Artist(
        # GENRES classical, guitar
        name='Roscoe Colt',
        bio=bio5,
        rate=220,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/guitarist_2.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/guitar/Monplaisir+-+Dormir+rien+de+plus.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/guitar/Monplaisir+-+La+m%C3%AAme+journ%C3%A9e+qu'hier.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/guitar/Monplaisir+-+Se+recourber.mp3",
        audio_track_name_1='Dormir rien de plus',
        audio_track_name_2='La meme journée qu\'hier',
        audio_track_name_3='Se recourber',
    )

    artist_13 = Artist(
        # GENRES country, singer/songwriter, folk
        name='Austin Park',
        bio=bio6,
        rate=85,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/country_singer.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/country_singer/HoliznaCC0+-+Dear+Old+Dad.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/country_singer/HoliznaCC0+-+Bad+Bad+Barn+Yard.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/country_singer/HoliznaCC0+-+A+Yankees+Southern+Blues.mp3',
        audio_track_name_1='Dear Old Dad',
        audio_track_name_2='Bad Bad Barn Yard',
        audio_track_name_3='A Yankees Southern Blues',
    )

    artist_14 = Artist(
        # GENRES electronic funk
        name='Deaf Monkeys',
        bio=bio7,
        rate=75,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/electro_funk_1.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/electro_funk/Malaventura+-+Agora.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/electro_funk/Malaventura+-+El+Burrito.mp3',
        audio_track_name_1='Agora',
        audio_track_name_2='El Burrito',
    )

    artist_15 = Artist(
        # GENRES electronic, funk
        name='Unspeakable Kid',
        bio=bio1,
        rate=125,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/electro_funk_2.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/electro_funk/Malaventura+-+Let's+the+kids+play.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/electro_funk/Malaventura+-+Polinesia.mp3",
        audio_track_name_1='Let the kids play',
        audio_track_name_2='Polinesia',
    )

    artist_16 = Artist(
        # GENRES classical, flute
        name='Sydney Ford',
        bio=bio2,
        rate=60,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/flutist_1.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/flute/Flute+Sonata+in+A+minor%2C+H.+562+-++I.+Poco+Adagio.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/flute/Flute+Sonata+in+E+minor%2C+HWV+359b+-II.+Allegro.mp3",
        audio_track_name_1='Flute Sonata in A minor - I. Poco Adagio',
        audio_track_name_2='Flute Sonata in E minor - II. Allegro',
    )

    artist_17 = Artist(
        # GENRES classical, flute
        name='Jordyn Tanner',
        bio=bio3,
        rate=90,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/flutist_2.jpg',
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/flute/24+Etudes+for+Flute%2C+Op.+15+-+III.+Allegro+con+brio+in+G+major.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/flute/30+Caprices+for+Flute+Solo%2C+Op.+107+-+30.+Chaconne.mp3",
        audio_track_name_1='24 Etude for Flute - III. Allegro con brio',
        audio_track_name_2='30 Caprices for Flute - Op. 107 Chaconne',
    )

    artist_18 = Artist(
        # GENRES hip-hop, rap
        name='Muse Flux',
        bio=bio4,
        rate=250,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/rapper.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/hip-hop/HoliznaRAPS+-+When+You+See+Me+Now.mp3',
        audio_track_name_1='When You See Me Now',
    )

    artist_19 = Artist(
        # GENRES jazz
        name='Taking Back November',
        bio=bio5,
        rate=750,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jazz_ensemble_1.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/U.S.+Army+Blues+-+BugaBlue.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/U.S.+Army+Blues+-+Not+On+The+Bus.mp3',
        audio_track_name_1='BugaBlue',
        audio_track_name_2='Not On The Bus',
    )

    artist_20 = Artist(
        # GENRES jazz
        name='Tesco\'s Revival',
        bio=bio6,
        rate=550,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jazz_ensemble_2.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/U.S.+Army+Blues+-+Stardust.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/U.S.+Army+Blues+-+Bayou+Farewell.mp3',
        audio_track_name_1='Stardust',
        audio_track_name_2='Bayou Farewell',
    )

    artist_21 = Artist(
        # GENRES jazz
        name='Twenty Inch Ants',
        bio=bio7,
        rate=900,
        profile_image_url='https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/quintet.jpg',
        audio_url_1='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/Breuss+Arrizabalaga+Quintet+-+Zubaida.mp3',
        audio_url_2='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/Breuss+Arrizabalaga+Quintet+-+Tsurugi.mp3',
        audio_url_3='https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazz/Breuss+Arrizabalaga+Quintet+-+Mount+Fuji.mp3',
        audio_track_name_1='Zubaida',
        audio_track_name_2='Tsurugi',
        audio_track_name_3='Mount Fuji',
    )

    artist_22 = Artist(
        # GENRES jazz, electronic, DJ
        name='Head Attack',
        bio=bio1,
        rate=150,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/electro_jazz_1.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/HoliznaCC0+-+Get+Evil.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/HoliznaCC0+-+Swingin'+Richards.mp3",
        audio_track_name_1='Get Evil',
        audio_track_name_2='Swingin\' Richards',
    )

    artist_23 = Artist(
        # GENRES jazz, electronic, DJ
        name='Crazy Kid Charlie',
        bio=bio2,
        rate=175,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jazz_electronic_3.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/Malaventura+-+Breeze+Funk.mp3",
        audio_track_name_1="Breeze Funk"
    )

    artist_24 = Artist(
        # GENRES jazz, electronic, DJ
        name='Heart for the Vandals',
        bio=bio3,
        rate=325,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jazzy_lofi.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/HoliznaCC0+-+Busking+In+the+SunLight.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/HoliznaCC0+-+Busted+AC+Unit.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/HoliznaCC0+-+There+Will+Come+A+Time.mp3",
        audio_track_name_1='Busking In The Sunglight',
        audio_track_name_2='Busted AC Unit',
        audio_track_name_3='There Will Come A Time',
    )

    artist_25 = Artist(
        # GENRES R&B
        name='St. Eddie Joy',
        bio=bio4,
        rate=175,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/jazzy_r%26b.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/jazzy/22+-+Windy+Dazed+Days+(ALIENBOYYYMUSIC).mp3",
        audio_track_name_1='Windy Dazed Days',
    )

    artist_26 = Artist(
        # GENRES classical, piano
        name='Noah Keith',
        bio=bio5,
        rate=100,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_1.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Kimiko+Ishizaka+-+Variatio+3+a+1+Clav.+Canone+all'Unisuono.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Kimiko+Ishizaka+-+Variatio+24+a+1+Clav.+Canone+all'Ottava.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Kimiko+Ishizaka+-+Variatio+29+a+1+ovvero+2+Clav..mp3",
        audio_track_name_1='Variation 3',
        audio_track_name_2='Variation 24',
        audio_track_name_3='Varation 29',
    )

    artist_27 = Artist(
        # GENRES classical, piano
        name='Mack George',
        bio=bio6,
        rate=185,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_2.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+19+in+G+Minor%2C+Op.+49+No.+1+-+I.+Andante.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+22+in+F+Major%2C+Op.+54+-+I.+In+tempo+dun+Menuetto.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+22+in+F+Major%2C+Op.+54+-+II.+Allegretto.mp3",
        audio_track_name_1='Sonata No. 19 in G Minor - I. Andante',
        audio_track_name_2='Sonata No. 22 - I. In tempo dun Menuetto',
        audio_track_name_3='Sonata No. 22 - II. Allegretto',
    )

    artist_28 = Artist(
        # GENRES classical, piano
        name='Glenn James',
        bio=bio7,
        rate=90,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_3.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Nathan+Eckel+-+Sonata+in+G+Minor%2C+_Didone+Abbandonata_+op.50+no.3+-+II.+Adagio+dolente.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Nathan+Eckel+-+Sonata+in+G+Minor%2C+_Didone+Abbandonata_+op.50+no.3+-+III.+Allegro+agitato%2C+e+con+disperazione.mp3",
        audio_track_name_1='Sonata in G Minor - II. Adagio dolente',
        audio_track_name_2='Sonata in G Minor - III. Allegro',
    )

    artist_29 = Artist(
        # GENRES classical, piano
        name='Charlie Bishop',
        bio=bio1,
        rate=100,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_6.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Paul+Pitman+-+Preludes%2C+Book+2+-+.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Brendan+Kinsella+-+Mozart+-+Sonata+No.+13+In+B+Flat+Major%2C+K.333+-+II.+Andante+Cantabile.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Brendan+Kinsella+-+Bach+-+Aria+Variata%2C+BVW.+989+-+Variation+No.+3.mp3",
        audio_track_name_1='Preludes Book 2',
        audio_track_name_2='Mozart - Sonata No. 13 in B-flat Major K.333',
        audio_track_name_3='Bach - Aria Variata BVW. 989',
    )

    artist_30 = Artist(
        # GENRES classical, piano
        name='Addison Parrish',
        bio=bio2,
        rate=200,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_5.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+13+in+E+Flat+Major%2C+Op.+27+No.+1+-+I.+Andante+-+Allegro+-+Tempo+I.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+13+in+E+Flat+Major%2C+Op.+27+No.+1+-+III.+Adagio+con+espressione.mp3",
        audio_track_name_1='Sonata No. 13 - I. Andante Allegro',
        audio_track_name_2='Sonata No. 13 - III. Adagio con espressione',
    )

    artist_31 = Artist(
        # GENRES classical, piano
        name='Lilian Madison',
        bio=bio3,
        rate=115,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pianist_6+(1).jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Carlos+Gardels+-+Bach+-+Book+I_+Prelude+and+Fugue+No.+8+in+E+Flat+Minor%2C+BWV+853%2C+Prelude.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/piano/Daniel+Veesey+-+Sonata+No.+19+in+G+Minor%2C+Op.+49+No.+1+-+II.+Rondo++Allegro.mp3",
        audio_track_name_1='Prelude and Fugue No. 8 in E-flat Minor',
        audio_track_name_2='Sonata No. 19 - II. Rondo Allegro',
    )



    artist_32 = Artist(
        # GENRES pop, electronic, dance
        name='Ghost Rose',
        bio=bio4,
        rate=600,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/pop_electronica.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/pop/Is+Enough.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/pop/Dance.mp3",
        audio_url_3="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/pop/Starring.mp3",
        audio_track_name_1='Is Enough',
        audio_track_name_2='Dance',
        audio_track_name_3='Starring',
    )

    artist_33 = Artist(
        # GENRES classical, violin
        name='Jennifer Seymour',
        bio=bio5,
        rate=150,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/violinist_1.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/violin/IMSLP724765-PMLP244085-04.J.S.Bach-SarabandefromPartitaNo.1InBMinor.mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/violin/Violin+Partita+no.+2%2C+BWV+1004.mp3",
        audio_track_name_1='Bach - Sarabande from Partita No. I in B minor',
        audio_track_name_2='Partita No. 2',
    )

    artist_34 = Artist(
        # GENRES classical, violin
        name='Lee Brooks',
        bio=bio6,
        rate=75,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/violinist_2.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/violin/IMSLP720634-PMLP10225-01.03._Sonata_No._1_In_G_Major%2C__Rain__Op._78-_Allegro_Molto_Moderato.mp3",
        audio_track_name_1='Op. 78 Allegro Molto Moderato',
    )

    artist_35 = Artist(
        # GENRES classical, violin
        name='Dwayne Gordon',
        bio=bio7,
        rate=175,
        profile_image_url="https://soundup-app-seed.s3.us-west-1.amazonaws.com/images/violinist_3.jpg",
        audio_url_1="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/violin/IMSLP720615-PMLP10227-01.03._Third_Movement-_Allegretto_Grazioso_(Quasi_Andante).mp3",
        audio_url_2="https://soundup-app-seed.s3.us-west-1.amazonaws.com/audio/violin/IMSLP720633-PMLP10225-01.02._Sonata_No._1_In_G_Major%2C__Rain__Op._78-_Adagio.mp3",
        audio_track_name_1='Third Movement - Allegretto Grazioso',
        audio_track_name_2='Sonata No. 1 in G Major - Op. 78 Adagio',
    )













    db.session.add(artist_1)
    db.session.add(artist_2)
    db.session.add(artist_3)
    db.session.add(artist_4)
    db.session.add(artist_5)
    db.session.add(artist_6)
    db.session.add(artist_7)
    db.session.add(artist_8)
    db.session.add(artist_9)
    db.session.add(artist_10)
    db.session.add(artist_11)
    db.session.add(artist_12)
    db.session.add(artist_13)
    db.session.add(artist_14)
    db.session.add(artist_15)
    db.session.add(artist_16)
    db.session.add(artist_17)
    db.session.add(artist_18)
    db.session.add(artist_19)
    db.session.add(artist_20)
    db.session.add(artist_21)
    db.session.add(artist_22)
    db.session.add(artist_23)
    db.session.add(artist_24)
    db.session.add(artist_25)
    db.session.add(artist_26)
    db.session.add(artist_27)
    db.session.add(artist_28)
    db.session.add(artist_29)
    db.session.add(artist_30)
    db.session.add(artist_31)
    db.session.add(artist_32)
    db.session.add(artist_33)
    db.session.add(artist_34)
    db.session.add(artist_35)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
