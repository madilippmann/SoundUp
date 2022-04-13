from .db import db

artists_genres = db.Table(
    "artists_genres",
    db.Column("artist_id", db.Integer, db.ForeignKey("artists.id")),
    db.Column("genre_id", db.Integer, db.ForeignKey("genres.id"))
)
