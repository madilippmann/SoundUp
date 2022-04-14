from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Review
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:review_id>/', methods=['PUT'])
@login_required
def update_review(review_id):
    review = request.get_json()
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.get(review_id)
        review.rating = form['rating'].data
        review.comment = form['comment'].data

        db.session.commit()
        return jsonify(review.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:review_id>/', methods=["DELETE"])
def delete_review(review_id):
    review = Review.query.get(review_id)

    if review.to_dict()['userId'] == int(session['_user_id']):
        db.session.delete(review)
        db.session.commit()
        return jsonify(review_id)
    else:
        return jsonify('invalid'), 401
