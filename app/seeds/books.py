from app.models import db, Book, Genre
from datetime import date

def seed_books():

    genres = Genre.query.all()
    book1 = Book(
        title="Dune", 
        author="Frank Herbert", 
        sub_heading="There are worms", 
        description="""Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as three separate serials in Analog magazine.
        It tied with Roger Zelazny's This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel. It is the first installment of the Dune
        saga. In 2003, it was described as the world's best-selling science fiction novel.""",
        cover_url='https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg',
        publish_date=date(1965, 8, 1),
        user_id = 1,
        books_genre=[genres[3],genres[27],genres[0],genres[16],genres[1]]
    )

    book2 = Book(
        title="The Five People You Meet In Heaven",
        author="Mitch Album",
        sub_heading="people die", 
        description="people in heaven",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388200541l/3431.jpg",
        publish_date=date(2001,5,9),
        user_id = 2,
        books_genre=[genres[27],genres[0],genres[22],genres[2]]
         )

    book3 = Book(
        title="One More Thing: Stories and Other Stories",
        author="B. J. Novak",
        sub_heading="""B.J. Novak's One More Thing: Stories and Other Stories is an endlessly entertaining, surprisingly sensitive, and startlingly original
         debut that signals the arrival of a brilliant new voice in American fiction.""",
        description="""A boy wins a $100,000 prize in a box of Frosted Flakes—only to discover that claiming  the winnings might unravel his family.
        A woman sets out to seduce motivational speaker Tony Robbins—turning for help to the famed motivator himself. A new arrival in Heaven, overwhelmed
        with options, procrastinates over a long-ago promise to visit his grandmother. We meet Sophia, the first artificially intelligent being capable of love,
        who falls for a man who might not be ready for it himself; a vengeance-minded hare, obsessed with scoring a rematch against the tortoise who
        ruined his life; and post-college friends who try to figure out how to host an intervention in the era of Facebook.
        Along the way, we learn why wearing a red T-shirt every day is the key to finding love, how February got its name, and why the stock market
        is sometimes just . . . down. Finding inspiration in questions from the nature of perfection to the icing on carrot cake, One More Thing
        has at its heart the most human of phenomena: love, fear, hope, ambition, and the inner stirring for the one elusive element just that might make
        a person complete. Across a dazzling range of subjects, themes, tones, and narrative voices, the many pieces in this collection are like nothing else,
        but they have one thing in common: they share the playful humor, deep heart, sharp eye, inquisitive mind, and altogether electrifying
        spirit of a writer with a fierce devotion to the entertainment of the reader.""",
        cover_url='https://images-na.ssl-images-amazon.com/images/I/31eHVwcLXdL._SX336_BO1,204,203,200_.jpg',
        publish_date=date(2014, 2, 4),
        user_id = 3,
        books_genre=[genres[27],genres[22],genres[19],genres[4]]
)

    book4 = Book(
        title="The Last Wish",
        author="Andrzej Sapkowski",
        sub_heading="The Witcher #0.5",
        description="""Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir,
        have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters
        and vile fiends that ravage the land and attack the innocent.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529591917l/40603587._SX318_.jpg",
        publish_date=date(1993, 1, 1),
        user_id = 1,
        books_genre=[genres[27],genres[0],genres[1],genres[5]]
        )

    book5 = Book(
        title="Beautiful World, Where Are You",
        author="Sally Rooney",
        sub_heading="",
        description="""Irish author Sally Rooney wins this year’s Best Fiction award for her celebrated novel on the complexities of romance, sex,
        and friendship on our swiftly tilting planet. A kind of deep-focus love quadrangle story, the book clearly hit a nerve for readers.
        This is the second GCA nomination for Rooney—she came in second for her 2018 novel, Normal People.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
        publish_date=date(2021, 9, 7),
        user_id = 2,
        books_genre=[genres[27],genres[19],genres[24],genres[6],genres[1]]
        )

    book6 = Book(
        title="The Last Thing He Told Me",
        author="Laura Dave",
        sub_heading="""The instant #1 New York Times bestselling mystery and Reese Witherspoon Book Club pick that’s captivated more than a million
        readers about a woman searching for the truth about her husband’s disappearance…at any cost.""",
        description="""Before Owen Michaels disappears, he manages to smuggle a note to his beloved wife of one year: Protect her. Despite her
        confusion and fear, Hannah Hall knows exactly to whom the note refers: Owen’s sixteen-year-old daughter, Bailey. Bailey, who lost her mother
        tragically as a child. Bailey, who wants absolutely nothing to do with her new stepmother.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628623381l/58744977._SY475_.jpg",
        publish_date=date(2021, 6, 1),
        user_id = 2,
        books_genre=[genres[27],genres[22],genres[19],genres[7]]
        )

    book7 = Book(
        title="How to Tell a Story: The Essential Guide to Memorable Storytelling from The Moth",
        author="Meg Bowles",
        sub_heading="""""",
        description="""The definitive guide to telling an unforgettable story in any setting, drawing on twenty-five years of experience from the storytelling
        experts at The Moth""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634655653l/58735007.jpg",
        publish_date=date(2022, 4, 26),
        user_id = 3,
        books_genre=[genres[6],genres[28],genres[8]]
        )

    book8 = Book(
        title="Witches: The Complete Collection",
        author="Daisuke Igarashi",
        sub_heading="""An omnibus of award-winning intergenerational tales of witchcraft from the critically acclaimed creator of Children of the Sea.""",
        description="""On a visit to the capital of a small country in the far west of Asia, a British girl named Nicola falls in love. The object of her
        affections is Mimar, a young man who works at a bazaar--yet despite her attempts, he doesn't notice her. Back at home in England, the ache of her
        unrequited love festers. After years spent obtaining wealth, fame, and the secret of the world, she returns to the bazaar to exact her deadly
        revenge upon Mimar and those he holds dearest. This story is just one of many in this dramatic collection, which features tales of witchcraft
        across the globe and even in the far reaches of outer space. Originally published as two volumes in Japan and winner of an Excellence Prize
        at the 2004 Japan Media Arts Festival, now you can own the entire series in English for the first time in this beautiful omnibus release.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642386795l/58539031.jpg",
        publish_date=date(2022, 4, 19),
        user_id = 3,
        books_genre=[genres[7],genres[22],genres[0],genres[18],genres[15],genres[9]]
        )   

    book9 = Book(
        title="We Were Dreamers: An Immigrant Superhero Origin Story",
        author="Simu Liu",
        sub_heading="""Marvel's newest recruit shares his own inspiring and unexpected origin story, from China to the bright lights of Hollywood.
        An immigrant who battles everything from parental expectations to cultural stereotypes, Simu Liu struggles to forge a path for himself,
        rising from the ashes of a failed accounting career (yes, you read that right) to become Shang-Chi.""",
        description="""Our story begins in the city of Harbin, where Simu's parents have left him in the care of his grandparents while they seek
        to build a future for themselves in Canada. One day, a mysterious stranger shows up at the door; it's Simu's father, who whisks him away
        from the only home he had ever known and to the land of opportunity and maple syrup. """,
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1652709298l/52582665.jpg",
        publish_date=date(2022, 5, 17),
        user_id = 3,
        books_genre=[genres[9],genres[10]]
        ) 

    book10 = Book(
        title="Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
        author="William H. McRaven",
        sub_heading="""""",
        description="""If you want to change the world, start off by making your bed.
        On May 17, 2014, Admiral William H. McRaven addressed the graduating class of the University of Texas at Austin on their Commencement day.
        Taking inspiration from the university's slogan, "What starts here changes the world," he shared the ten principles he learned during Navy Seal
        training that helped him overcome challenges not only in his training and long Naval career, but also throughout his life; and he explained how anyone
        can use these basic lessons to change themselves-and the world-for the better.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495769497l/31423133._SX318_.jpg",
        publish_date=date(2017, 4, 1),
        user_id = 3,
        books_genre=[genres[28],genres[10],genres[20],genres[9],genres[11]]
        ) 

    book11 = Book(
        title="All Rhodes Lead Here",
        author="Mariana Zapata",
        sub_heading="""""",
        description="""Losing people you love is hard.
        Aurora De La Torre knows moving back to a place that was once home isn’t going to be easy.
        Starting your whole life over probably isn’t supposed to be.
        But a small town in the mountains might be the perfect remedy for a broken heart.
        Checking out her landlord across the driveway just might cure it too.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617355542l/57605091._SY475_.jpg",
        publish_date=date(2021, 4, 1),
        user_id = 3,
        books_genre=[genres[24],genres[19],genres[27],genres[11],genres[12]]
        )     

    book12 = Book(
        title="Spy School at Sea",
        author="Stuart Gibbs",
        sub_heading="""In the ninth addition to the New York Times bestselling Spy School series, Ben Ripley faces his nemesis, Murray Hill, on the high seas.""",
        description="""Thanks to the evidence Ben uncovered in his investigation of the Croatoan, the CIA has tracked his nemesis, Murray Hill, to Central America,
        where they believe he is boarding the world’s biggest cruise ship, The Emperor of the Seas, on its maiden voyage around the world.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628429743l/56695102.jpg",
        publish_date=date(2021, 8, 31),
        user_id = 3,
        books_genre=[genres[12],genres[22],genres[27],genres[1],genres[13]]
        )  

    book13 = Book(
        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        author="James Clear",
        sub_heading="""""",
        description="""No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts
        on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors
        that lead to remarkable results.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg",
        publish_date=date(2018, 10, 16),
        user_id = 3,
        books_genre=[genres[13],genres[10],genres[26],genres[28],genres[20],genres[14]]
        ) 

    book14 = Book(
        title="Under the Magnolias",
        author="T.I. Lowe",
        sub_heading="""This night not only marked the end to the drought, but also the end to the long-held secret we'd kept hidden under the magnolias.""",
        description="""Austin Foster is barely a teenager when her mama dies giving birth to twins, leaving her to pick up the pieces while holding her
        six siblings together and doing her best to stop her daddy from retreating into his personal darkness.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1616606760l/56217998._SY475_.jpg",
        publish_date=date(2021, 5, 4),
        user_id = 3,
        books_genre=[genres[14],genres[27],genres[24],genres[19],genres[22],genres[15]]
        ) 

    book15 = Book(
        title="My Evil Mother: A Short Story",
        author="Margaret Atwood",
        sub_heading="""""",
        description="""Life is hard enough for a teenage girl in 1950s suburbia without having a mother who may—or may not—be a witch.
        A single mother at that. Sure, she fits in with her starched dresses, string of pearls, and floral aprons. Then there are the hushed and
        mystical consultations with neighborhood women in distress. The unsavory, mysterious plants in the flower beds. The divined warning to steer clear
        of a boyfriend whose fate is certainly doomed. But as the daughter of this bewitching homemaker comes of age and her mother’s claims
        become more and more outlandish, she begins to question everything she once took for granted. """,
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646767763l/60497502._SY475_.jpg",
        publish_date=date(2021, 4, 1),
        user_id = 3,
        books_genre=[genres[15],genres[27],genres[22],genres[0],genres[16]]
        )  

    book16 = Book(
        title="The Midwife of Auschwitz",
        author="Anna Stuart",
        sub_heading="""""",
        description="""Auschwitz, 1943: As I held the tiny baby in my arms, my fingers traced the black tattoo etched across her little thigh.
        And I prayed that one day this set of numbers, identical to her mother’s, would have the power to reunite a family torn apart by war…""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649138422l/60753718._SY475_.jpg",
        publish_date=date(2022, 5, 31),
        user_id = 3,
        books_genre=[genres[5],genres[27],genres[4],genres[2],genres[17]]
        ) 
        
    book17 = Book(
        title="Ashfall Apocalypse: An Apocalyptic Thriller",
        author="M.L. Banner",
        sub_heading="""""",
        description="""Deadly earthquakes, colossal tidal waves, catastrophic destruction...""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647272677l/60616654._SY475_.jpg",
        publish_date=date(2021, 12, 8),
        user_id = 3,
        books_genre=[genres[0],genres[27],genres[3],genres[8],genres[18]]
        )        

    book18 = Book(
        title="Home Body",
        author="Rupi Kaur",
        sub_heading="""""",
        description="""Rupi Kaur constantly embraces growth, and in home body, she walks readers through a reflective and intimate journey visiting the past,
        the present, and the potential of the self. home body is a collection of raw, honest conversations with oneself – reminding readers to fill up on love,
        acceptance, community, family, and embrace change. Illustrated by the author, themes of nature and nurture, light and dark, rest here.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600123950l/49656780.jpg",
        publish_date=date(2020, 11, 17),
        user_id = 3,
        books_genre=[genres[17],genres[13],genres[28],genres[19],genres[20]]
        ) 

    book19 = Book(
        title="Love & Saffron: A Novel of Friendship, Food, and Love",
        author="Kim Fay",
        sub_heading="""The #1 Indie Next Pick, in the vein of the classic 84, Charing Cross Road and Meet Me at the Museum, this witty
        and tender novel follows two women in 1960s America as they discover that food really does connect us all, and that friendship
        and laughter are the best medicine.""",
        description="""When twenty-seven-year-old Joan Bergstrom sends a fan letter--as well as a gift of saffron--to fifty-nine-year-old Imogen Fortier,
        a life-changing friendship begins. Joan lives in Los Angeles and is just starting out as a writer for the newspaper food pages. Imogen lives on
        Camano Island outside Seattle, writing a monthly column for a Pacific Northwest magazine, and while she can hunt elk and dig for clams,
        she's never tasted fresh garlic--exotic fare in the Northwest of the sixties. As the two women commune through their letters, they build
        a closeness that sustains them through the Cuban Missile Crisis, the assassination of President Kennedy, and the unexpected in their own lives.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1625597972l/58284121.jpg",
        publish_date=date(2022, 2, 8),
        user_id = 3,
        books_genre=[genres[27],genres[4],genres[19],genres[21],genres[23]]
        ) 

    book20 = Book(
        title="The Godfather",
        author="Mario Puzo",
        sub_heading="""(The Godfather #1)""",
        description="""Almost fifty years ago, a classic was born. A searing portrayal of the Mafia underworld, The Godfather introduced
        readers to the first family of American crime fiction, the Corleones, and their powerful legacy of tradition, blood, and honor.
        The seduction of power, the pitfalls of greed, and the allegiance to family—these are the themes that have resonated with millions of readers
        around the world and made The Godfather the definitive novel of the violent subculture that, steeped in intrigue and controversy,
        remains indelibly etched in our collective consciousness.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394988109l/22034._SY475_.jpg",
        publish_date=date(2002, 3, 1),
        user_id = 3,
        books_genre=[genres[16],genres[4],genres[24]]
        ) 

    book21 = Book(
        title="The Housemaid",
        author="Freida McFadden",
        sub_heading="""""",
        description="""“Welcome to the family,” Nina Winchester says as I shake her elegant, manicured hand. I smile politely, gazing around
        the marble hallway. Working here is my last chance to start fresh. I can pretend to be whoever I like. But I’ll soon learn that the Winchesters’
        secrets are far more dangerous than my own…""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646534743l/60556912._SY475_.jpg",
        publish_date=date(2022, 4, 26),
        user_id = 3,
        books_genre=[genres[27],genres[29],genres[19],genres[25]]
        ) 

    book22 = Book(
        title="People We Meet on Vacation",
        author="Emily Henry",
        sub_heading="""Two best friends. Ten summer trips. One last chance to fall in love.""",
        description="""Poppy and Alex. Alex and Poppy. They have nothing in common. She’s a wild child; he wears khakis.
        She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college
        many years ago, they are the very best of friends. For most of the year they live far apart—she’s in New York City, and he’s in their
        small hometown—but every summer, for a decade, they have taken one glorious week of vacation together.""",
        cover_url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg",
        publish_date=date(2021, 5, 1),
        user_id = 3,
        books_genre=[genres[24],genres[27],genres[19],genres[26]]
        )    

    db.session.add(book1)
    db.session.add(book2)
    db.session.add(book3)
    db.session.add(book5)
    db.session.add(book6)
    db.session.add(book7)
    db.session.add(book8)
    db.session.add(book9)
    db.session.add(book4)
    db.session.add(book10)
    db.session.add(book11)
    db.session.add(book12)
    db.session.add(book13)
    db.session.add(book14)
    db.session.add(book15)
    db.session.add(book16)
    db.session.add(book17)
    db.session.add(book18)
    db.session.add(book19)
    db.session.add(book20)
    db.session.add(book21)
    db.session.add(book22)

    db.session.commit()

def undo_books():
    db.session.execute('TRUNCATE books RESTART IDENTITY CASCADE;')
    db.session.commit()
