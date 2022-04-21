from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import db, Artist, Review
from app.forms import ReviewForm

from sqlalchemy import desc

artist_routes = Blueprint('artists', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages



@artist_routes.route('/')
@login_required
def get_artists():

    artists = Artist.query.all()
    artists = [artist.to_dict() for artist in artists]
    return jsonify(artists)



@artist_routes.route('/<int:artistId>/', methods=['GET'])
@login_required
def get_artist(artistId):
    artist = Artist.query.get(artistId)

    return jsonify(artist.to_dict())


# REVIEWS
@artist_routes.route('/<int:artist_id>/reviews/')
@login_required
def get_artist_reviews(artist_id):
    reviews = Review.query.filter(Review.artist_id == artist_id).all()
    reviews = [review.to_dict() for review in reviews]

    return jsonify(reviews)


@artist_routes.route('/<int:artist_id>/reviews/', methods=['POST'])
@login_required
def create_review(artist_id):
    review = request.get_json()
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = {
            "user_id": session['_user_id'],
            "artist_id": artist_id,
            "rating": form.data["rating"],
            "comment": form.data["comment"],
        }
        review = Review(**data)
        db.session.add(review)
        db.session.commit()
        return jsonify(review.to_dict())


    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
