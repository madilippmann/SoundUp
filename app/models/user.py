from .db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    name = db.Column(db.String(40), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    bookings = db.relationship('Booking', back_populates='user', cascade='all, delete')
    reviews = db.relationship('Review', back_populates='user', cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        bookings = [booking.to_dict() for booking in self.bookings]
        reviews = [review.to_dict() for review in self.reviews]

        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            # 'artist_id': self.artist_id,
            'bookings': bookings,
            'reviews': reviews
        }


    def to_dict_lite(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            # 'artist_id': self.artist_id,
        }
