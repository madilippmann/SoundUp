from .db import db
from sqlalchemy.sql import func


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    description = db.Column(db.Text, nullable=True)
    confirmed = db.Column(db.Boolean, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    user = db.relationship('User', back_populates='posts')
    artist = db.relationship('Artist', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id
            'artist_id': self.artist_id,
            'date': self.date,
            'description': self.description,
            'confirmed': self.confirmed,
            'user': self.user.to_dict_lite(),
            'artist': self.artist.to_dict_lite(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

    def to_dict_lite(self):
        return {
            'id': self.id,
            'user_id': self.user_id
            'artist_id': self.artist_id,
            'date': self.date,
            'description': self.description,
            'confirmed': self.confirmed,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
