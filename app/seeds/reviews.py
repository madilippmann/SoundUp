from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review_1 = Review(
        user_id=1,
        artist_id=5,
        comment='Aut quasi aperiam ex molestiae quae a quia veniam eum amet quia? Et officiis doloribus.',
        rating=5
    )
    review_2 = Review(
        user_id=1,
        artist_id=2,
        comment='Eos sint consequatur ea cupiditate iste et perferendis culpa ea debitis fuga. 33 voluptas odit aut nisi eius quo omnis consequatur ea voluptatibus harum qui quod cumque eum quas earum ut tempora dolor.',
        rating=4
    )
    review_3 = Review(
        user_id=1,
        artist_id=1,
        comment='Laudantium exercitationem et corrupti itaque est dignissimos iste est molestias ratione et eligendi voluptatem et aliquam repudiandae qui accusamus ullam. Ut voluptatum laborum sit voluptas harum vel alias ullam ut incidunt earum qui alias quis.',
        rating=3
    )
    review_4 = Review(
        user_id=2,
        artist_id=1,
        comment=' In fugit blanditiis vel galisum laboriosam eum quis aliquam est earum assumenda ea dolorem quae sit galisum praesentium.',
        rating=5
    )
    review_5 = Review(
        user_id=2,
        artist_id=5,
        comment='Cum iure voluptas ut rerum consequuntur praesentium reprehenderit. Id maiores tempora ex nihil internos qui eligendi sunt aut quia cumque similique velit qui ullam blanditiis et itaque quisquam. Ut exercitationem adipisci aut eaque voluptas sed rerum.',
        rating=5
    )
    review_6 = Review(
        user_id=2,
        artist_id=3,
        comment='Et aliquid veritatis aut sequi neque aut obcaecati quia. Et maxime voluptatem est laborum velit ea facere recusandae ea sunt quod.',
        rating= 4,
    )
    review_7 = Review(
        user_id=2,
        artist_id=7,
        comment='At asperiores aliquid non voluptates possimus est odio placeat ab adipisci dolores in rerum molestiae est galisum quia',
        rating= 4,
    )
    review_8 = Review(
        user_id=3,
        artist_id=2,
        comment='Aut omnis cupiditate est temporibus ullam et omnis voluptas qui autem perspiciatis! Eum blanditiis unde At dolores temporibus eum quidem nobis sit illo sequi. Id rerum vitae et impedit deleniti sit similique necessitatibus.',
        rating=4
    )
    review_9 = Review(
        user_id=3,
        artist_id=5,
        comment= 'Ut beatae repellat est velit nihil sit facere odit qui similique natus et asperiores galisum!',
        rating=5
    )
    review_10 = Review(
        user_id=3,
        artist_id=1,
        comment='Lorem ipsum dolor sit amet. Sit ipsam Quis et consequuntur omnis qui assumenda Quis ad architecto vitae. Eos ipsam tempore et alias soluta cum natus quia.',
        rating=5
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
    db.session.add(review_9)
    db.session.add(review_10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
