from flask import Blueprint, jsonify, request
from app.models import Genre, db
from sqlalchemy import asc

genre_routes = Blueprint('genres', __name__)


@genre_routes.route('/')
def get_genres():
    genres = Genre.query.order_by(Genre.name.asc()).all()
    return jsonify([genre.to_dict_lite() for genre in genres])
