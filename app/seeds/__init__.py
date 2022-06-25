from this import s
from app.seeds.books import seed_books, undo_books
from flask.cli import AppGroup

from app.seeds.genres import seed_genres, undo_seedgenres
from .readstatues import seed_readstatues, undo_seedreadstatues
from .users import seed_users, undo_users
from .bookshelves import seed_bookshelves, undo_seedbookshelves
from .reviews import seed_reviews, undo_seedreviews

# from .bookshelvesbooks import seed_bookshelvesbooks, undo_seedbookshelvesbooks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_bookshelves()
    seed_books()
    seed_readstatues()
    seed_reviews()
    seed_genres()
    # seed_bookshelvesbooks()
    

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_seedbookshelves()  
    undo_books()
    undo_seedreadstatues()
    undo_seedreviews()
    undo_seedgenres()
    # undo_seedbookshelvesbooks()
    
    # Add other undo functions here
