from .db import db
from .artists_genres import artists_genres
from sqlalchemy.sql import func

import simplejson as json

class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    rate = db.Column(db.Numeric(8, 2))
    profile_image_url = db.Column(db.String(255), nullable=False)
    audio_url_1 = db.Column(db.String(255), nullable=True)
    audio_url_2 = db.Column(db.String(255), nullable=True)
    audio_url_3 = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    reviews = db.relationship('Review', back_populates='artist')
    bookings = db.relationship('Booking', back_populates='artist')


    genres = db.relationship(
        'Genre',
        secondary=artists_genres,
        back_populates='artists'
    )

    def to_dict(self):
        genres = [genre.to_dict_lite() for genre in self.genres]
        reviews = [review.to_dict() for review in reversed(self.reviews)]
        return {
            'id': self.id,
            'name': self.name,
            'bio': self.bio,
            'rate': json.dumps(self.rate, use_decimal=True),
            'profile_image_url': self.profile_image_url,
            'audio_url_1': self.audio_url_1,
            'audio_url_2': self.audio_url_2,
            'audio_url_3': self.audio_url_3,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'reviews_length': len(self.reviews),
            'average_rating': self.average_rating(),
            'genres': genres,
            'reviews': reviews
        }

    def to_dict_lite(self):
        return {
            'id': self.id,
            'name': self.name,
            'bio': self.bio,
            'rate': json.dumps(self.rate, use_decimal=True),
            'reviews_length': len(self.reviews),
            'average_rating': self.average_rating(),
            'profile_image_url': self.profile_image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }


    def average_rating(self):
        sum = 0

        if len(self.reviews):
            for review in self.reviews:
                print(review.rating)
                sum += review.rating

            return str(round(sum / len(self.reviews), 1))

        else: return 'No reviews'
