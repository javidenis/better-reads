"""okay

Revision ID: ad0f42db3f8a
Revises: 
Create Date: 2022-06-25 13:12:32.581104

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ad0f42db3f8a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('genres',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('picture_url', sa.Text(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('bio', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=200), nullable=False),
    sa.Column('author', sa.String(length=200), nullable=False),
    sa.Column('sub_heading', sa.String(length=500), nullable=True),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('cover_url', sa.Text(), nullable=False),
    sa.Column('publish_date', sa.Date(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bookshelves',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bookgenres',
    sa.Column('genreId', sa.Integer(), nullable=False),
    sa.Column('bookId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bookId'], ['books.id'], ),
    sa.ForeignKeyConstraint(['genreId'], ['genres.id'], ),
    sa.PrimaryKeyConstraint('genreId', 'bookId')
    )
    op.create_table('bookshelfbooks',
    sa.Column('bookshelfId', sa.Integer(), nullable=False),
    sa.Column('bookId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bookId'], ['books.id'], ),
    sa.ForeignKeyConstraint(['bookshelfId'], ['bookshelves.id'], ),
    sa.PrimaryKeyConstraint('bookshelfId', 'bookId')
    )
    op.create_table('readstatues',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('book_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('readStatus', sa.String(length=200), nullable=False),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('book_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('readstatues')
    op.drop_table('bookshelfbooks')
    op.drop_table('bookgenres')
    op.drop_table('bookshelves')
    op.drop_table('books')
    op.drop_table('users')
    op.drop_table('genres')
    # ### end Alembic commands ###
