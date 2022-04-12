from .db import db
from sqlalchemy.sql import func


class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    # genres = db.relationship('Genre', secondary=artists_genres, back_populates='genres')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
            'bio': self.bio,
            'rate': self.rate
            'date': self.date,
            'profile_image_url': self.profile_image_url,
            'audio_url_1': self.audio_url_1,
            'audio_url_2': self.audio_url_2,
            'audio_url_3': self.audio_url_3,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            # 'genres': self.genres.to_dict()
        }

    def to_dict_lite(self):
        return {
            'id': self.id,
            'name': self.name
            'bio': self.bio,
            'rate': self.rate
            'date': self.date,
            'profile_image_url': self.profile_image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
