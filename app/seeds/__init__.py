from flask.cli import AppGroup
from .users import seed_users, undo_users
from .genres import seed_genres, undo_genres
from .artists import seed_artists, undo_artists
from .bookings import seed_bookings, undo_bookings
from .reviews import seed_reviews, undo_reviews
from .artists_genres import seed_artists_genres, undo_artists_genres

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_genres()
    seed_artists()
    seed_bookings()
    seed_reviews()
    seed_artists_genres()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_artists_genres()
    undo_reviews()
    undo_bookings()
    undo_artists()
    undo_genres()
    undo_users()

    # Add other undo functions here
