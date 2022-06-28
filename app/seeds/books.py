from app.models import db, Book, Genre
from datetime import date

def seed_books():

    genres = Genre.query.all()
    book1 = Book(
        title="Dune", 
        author="Frank Herbert", 
        sub_heading="There are worms", 
        description="Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as three separate serials in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel. It is the first installment of the Dune saga. In 2003, it was described as the world's best-selling science fiction novel.",
        cover_url='https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg',
        publish_date=date(1965, 8, 1),
        user_id = 1,
        books_genre=genres
    )

    book2 = Book(
        title="The Five People You Meet In Heaven",
        author="Mitch Album",
        sub_heading="people die", 
        description="people in heaven",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388200541l/3431.jpg",
        publish_date=date(2001,5,9),
        user_id = 2,
        books_genre=genres
         )

    book3 = Book(
        title="One More Thing: Stories and Other Stories",
        author="B. J. Novak",
        sub_heading="B.J. Novak's One More Thing: Stories and Other Stories is an endlessly entertaining, surprisingly sensitive, and startlingly original debut that signals the arrival of a brilliant new voice in American fiction.",
        description="A boy wins a $100,000 prize in a box of Frosted Flakes—only to discover that claiming  the winnings might unravel his family. A woman sets out to seduce motivational speaker Tony Robbins—turning for help to the famed motivator himself. A new arrival in Heaven, overwhelmed with options, procrastinates over a long-ago promise to visit his grandmother. We meet Sophia, the first artificially intelligent being capable of love, who falls for a man who might not be ready for it himself; a vengeance-minded hare, obsessed with scoring a rematch against the tortoise who ruined his life; and post-college friends who try to figure out how to host an intervention in the era of Facebook.  Along the way, we learn why wearing a red T-shirt every day is the key to finding love, how February got its name, and why the stock market is sometimes just . . . down. Finding inspiration in questions from the nature of perfection to the icing on carrot cake, One More Thing has at its heart the most human of phenomena: love, fear, hope, ambition, and the inner stirring for the one elusive element just that might make a person complete. Across a dazzling range of subjects, themes, tones, and narrative voices, the many pieces in this collection are like nothing else, but they have one thing in common: they share the playful humor, deep heart, sharp eye, inquisitive mind, and altogether electrifying spirit of a writer with a fierce devotion to the entertainment of the reader.",
        cover_url='https://images-na.ssl-images-amazon.com/images/I/31eHVwcLXdL._SX336_BO1,204,203,200_.jpg',
        publish_date=date(2014, 2, 4),
        user_id = 3,
        books_genre=genres
)

    book4 = Book(
        title="The Last Wish",
        author="Andrzej Sapkowski",
        sub_heading="The Witcher #0.5",
        description="Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529591917l/40603587._SX318_.jpg",
        publish_date=date(1993, 1, 1),
        user_id = 1,
        books_genre=genres
        )


    db.session.add(book1)
    db.session.add(book2)
    db.session.add(book3)
    db.session.add(book4)

    db.session.commit()

def undo_books():
    db.session.execute('TRUNCATE books RESTART IDENTITY CASCADE;')
    db.session.commit()
