genres = [
    "Singer/Songwriter",
    "Pop",
    "Electronic",
    "DJ",
    "Classical",
    "Cover",
    "Rock",
    "Blues",
    "Folk",
    "Musical Theater",
    "Opera",
    "String Quartet",
    "Punk",
    'Hip-hop',
    'Country',
    'Metal',
    'Piano/Vocal',
    'Indie',
    'Funk',
    'R&B',
    'Disco',
    'Techno',
    'Reggae',
    'Jazz',
    'Experimental',
]

for i in range(len(genres)):
    print(f"genre_{i+1} = Genres(name='{genres[i]}')")

for i in range(len(genres)):
    print(f"db.session.add(genre_{i+1})")
