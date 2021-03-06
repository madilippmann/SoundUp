from .db import db
from sqlalchemy.sql import func


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    comment = db.Column(db.String(255), nullable=True)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    user = db.relationship('User', back_populates='reviews')
    artist = db.relationship('Artist', back_populates='reviews')

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'artist_id': self.artist_id,
            'artist': self.artist.to_dict_lite(),
            'rating': self.rating,
            'comment': self.comment,
            'user': self.user.to_dict_lite(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

    def to_dict_user(self):

        return {
            'id': self.id,
            'artist': self.artist.to_dict_lite(),
            'artist_id': self.artist_id,
            'rating': self.rating,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
