from .db import db
from sqlalchemy.sql import func


class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    artists = db.relationship('Artist', secondary=artists_genres, back_populates='genres')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'artists': self.artists.to_dict_lite()
        }

    def to_dict_lite(self):
        return {
            'id': self.id,
            'name': self.name
        }
