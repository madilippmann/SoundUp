from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Artist

artist_routes = Blueprint('artists', __name__)

@artist_routes.route('/')
@login_required
def get_artists():

    artists = Artist.query.all()
    artists = [artist.to_dict_lite() for artist in artists]
    return jsonify(artists)



@artist_routes.route('/<int:artistId>/', methods=['GET'])
@login_required
def get_artist(artistId):
    artist = Artist.query.get(artistId)

    return jsonify(artists.to_dict())
