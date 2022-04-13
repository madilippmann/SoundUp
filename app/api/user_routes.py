from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('user', __name__)


@user_routes.route('/')
@login_required
def user(id):
    user = User.query.get(session['_user_id'])
    return user.to_dict()
