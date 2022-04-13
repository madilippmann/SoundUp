from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Artist

artist_routes = Blueprint('artists', __name__)

@artist_routes.route('/')
@login_required
def artists():
    artists = Artist.query.all()
    artists = [artist.to_dict() for artist in artists]
    return jsonify(artists)
