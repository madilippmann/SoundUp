from .db import db
from sqlalchemy.sql import func


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    rate = db.Column(db.Numeric(8, 2))
    profile_image_url = db.Column(db.varchar(255), nullable=False)
    audio_url_1 = db.Column(db.varchar(255), nullable=True)
    audio_url_2 = db.Column(db.varchar(255), nullable=True)
    audio_url_3 = db.Column(db.varchar(255), nullable=True)
    confirmed = db.Column(db.Boolean, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

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
