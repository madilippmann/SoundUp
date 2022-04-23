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

    review_11 = Review(
        user_id=11,
        artist_id=31,
        comment='Et sed eligendi mollitia sint quos perspiciatis tenetur.',
        rating=2
    )
    review_12 = Review(
            user_id=14,
            artist_id=35,
            comment='Officiis quis sit rerum ea qui velit rerum distinctio ipsum.',
            rating=2
        )
    review_13 = Review(
            user_id=1,
            artist_id=35,
            comment='Nemo eius fugit accusamus.',
            rating=1
        )
    review_14 = Review(
            user_id=8,
            artist_id=30,
            comment='Doloremque consequatur quis molestias explicabo dignissimos laudantium cum minima minima.',
            rating=5
        )
    review_15 = Review(
            user_id=3,
            artist_id=24,
            comment='Culpa eum ad possimus in tenetur.',
            rating=1
        )
    review_16 = Review(
            user_id=9,
            artist_id=26,
            comment='Omnis et saepe ut alias qui.',
            rating=2
        )
    review_17 = Review(
            user_id=7,
            artist_id=13,
            comment='Omnis expedita minus repudiandae.',
            rating=1
        )
    review_18 = Review(
            user_id=17,
            artist_id=26,
            comment='Atque dignissimos ut provident veritatis ea id.',
            rating=1
        )
    review_19 = Review(
            user_id=19,
            artist_id=11,
            comment='Eos consequatur corporis magnam sequi dicta sint.',
            rating=2
        )
    review_20 = Review(
            user_id=6,
            artist_id=4,
            comment='Eaque dolore et et ipsum a similique mollitia labore.',
            rating=4
        )
    review_21 = Review(
            user_id=4,
            artist_id=30,
            comment='Modi ut amet voluptatibus.',
            rating=1
        )
    review_22 = Review(
            user_id=9,
            artist_id=7,
            comment='Aut expedita inventore maiores sed.',
            rating=3
        )
    review_23 = Review(
            user_id=15,
            artist_id=30,
            comment='Assumenda molestias eveniet nisi maxime illum consectetur.',
            rating=2
        )
    review_24 = Review(
            user_id=20,
            artist_id=25,
            comment='Culpa animi necessitatibus in id aut tempore aut quia exercitationem.',
            rating=2
        )
    review_25 = Review(
            user_id=21,
            artist_id=30,
            comment='Quae voluptate quos reiciendis quidem voluptatum maxime velit voluptatem.',
            rating=5
        )
    review_26 = Review(
            user_id=11,
            artist_id=3,
            comment='Corrupti soluta ratione molestiae et sequi repellendus.',
            rating=3
        )
    review_27 = Review(
            user_id=12,
            artist_id=16,
            comment='Voluptatibus praesentium omnis ipsa assumenda sint.',
            rating=4
        )
    review_28 = Review(
            user_id=22,
            artist_id=33,
            comment='Quidem nesciunt tempore saepe aut praesentium ullam dolores nobis.',
            rating=4
        )
    review_29 = Review(
            user_id=1,
            artist_id=10,
            comment='Dolorem et velit nostrum aliquid.',
            rating=2
        )
    review_30 = Review(
            user_id=7,
            artist_id=28,
            comment='Est excepturi dolores soluta.',
            rating=4
        )
    review_31 = Review(
            user_id=10,
            artist_id=16,
            comment='Inventore quas itaque nihil non libero impedit natus.',
            rating=5
        )
    review_32 = Review(
            user_id=21,
            artist_id=15,
            comment='Quibusdam molestias officiis tenetur ea.',
            rating=2
        )
    review_33 = Review(
            user_id=2,
            artist_id=14,
            comment='Quisquam dolor quia quidem voluptatem.',
            rating=4
        )
    review_34 = Review(
            user_id=20,
            artist_id=17,
            comment='Itaque cum optio tempora ea et est porro ut ea.',
            rating=3
        )
    review_35 = Review(
            user_id=22,
            artist_id=26,
            comment='Reiciendis at suscipit at est rerum.',
            rating=4
        )
    review_36 = Review(
            user_id=12,
            artist_id=15,
            comment='In itaque fugit assumenda quo.',
            rating=4
        )
    review_37 = Review(
            user_id=9,
            artist_id=7,
            comment='Iste consequatur quia mollitia molestiae praesentium.',
            rating=2
        )
    review_38 = Review(
            user_id=18,
            artist_id=15,
            comment='Nesciunt nostrum et harum maiores placeat voluptas repellendus placeat dolores.',
            rating=1
        )
    review_39 = Review(
            user_id=3,
            artist_id=21,
            comment='Velit rerum quis maiores consequatur non repudiandae debitis qui tenetur.',
            rating=1
        )
    review_40 = Review(
            user_id=9,
            artist_id=24,
            comment='Quibusdam et quasi autem ullam facilis ea qui nihil.',
            rating=2
        )
    review_41 = Review(
            user_id=13,
            artist_id=35,
            comment='Maxime et saepe neque aliquid.',
            rating=3
        )
    review_42 = Review(
            user_id=12,
            artist_id=32,
            comment='Consequatur magni reiciendis nihil possimus at aspernatur dolore temporibus porro.',
            rating=4
        )
    review_43 = Review(
            user_id=14,
            artist_id=31,
            comment='Error blanditiis corrupti nesciunt ut ea.',
            rating=4
        )
    review_44 = Review(
            user_id=4,
            artist_id=17,
            comment='Aliquam provident asperiores libero quo sint.',
            rating=5
        )
    review_45 = Review(
            user_id=17,
            artist_id=6,
            comment='Aut sint totam cumque consequuntur quo.',
            rating=2
        )
    review_46 = Review(
            user_id=3,
            artist_id=15,
            comment='Asperiores odio a consequatur nihil deleniti praesentium quia possimus.',
            rating=4
        )
    review_47 = Review(
            user_id=4,
            artist_id=18,
            comment='Dolore aperiam voluptas est et omnis quia qui quisquam pariatur.',
            rating=5
        )
    review_48 = Review(
            user_id=2,
            artist_id=13,
            comment='Ullam eos enim ullam rerum non sequi.',
            rating=3
        )
    review_49 = Review(
            user_id=15,
            artist_id=21,
            comment='Vel quisquam rerum quibusdam est qui perspiciatis quia excepturi quia.',
            rating=2
        )
    review_50 = Review(
            user_id=18,
            artist_id=12,
            comment='Rem accusantium exercitationem perspiciatis delectus perspiciatis.',
            rating=5
        )
    review_51 = Review(
            user_id=13,
            artist_id=33,
            comment='Ea voluptatem quidem officia quam eveniet ratione ea ut consequatur.',
            rating=2
        )
    review_52 = Review(
            user_id=2,
            artist_id=24,
            comment='Non odio dolorem accusamus minus ex numquam.',
            rating=5
        )
    review_53 = Review(
            user_id=19,
            artist_id=21,
            comment='Et facere a commodi sint.',
            rating=4
        )
    review_54 = Review(
            user_id=3,
            artist_id=1,
            comment='Illum quas dolorem amet et id aut voluptatem ullam labore.',
            rating=4
        )
    review_55 = Review(
            user_id=5,
            artist_id=1,
            comment='Repellendus ducimus consequatur error.',
            rating=4
        )
    review_56 = Review(
            user_id=10,
            artist_id=13,
            comment='Optio repellendus consequatur molestias sapiente vero quis et aut reiciendis.',
            rating=2
        )
    review_57 = Review(
            user_id=15,
            artist_id=15,
            comment='Eum laudantium maxime accusamus voluptates.',
            rating=4
        )
    review_58 = Review(
            user_id=16,
            artist_id=26,
            comment='Sint neque minima et pariatur sit quis dolore.',
            rating=5
        )
    review_59 = Review(
            user_id=21,
            artist_id=18,
            comment='Sint fugiat quisquam omnis.',
            rating=2
        )
    review_60 = Review(
            user_id=10,
            artist_id=31,
            comment='Itaque aut qui eveniet nulla ullam ad enim et.',
            rating=2
        )
    review_61 = Review(
            user_id=15,
            artist_id=34,
            comment='Porro et veniam omnis magnam dolorem animi quas.',
            rating=5
        )
    review_62 = Review(
            user_id=7,
            artist_id=13,
            comment='Molestias cupiditate distinctio asperiores laborum accusamus.',
            rating=4
        )
    review_63 = Review(
            user_id=11,
            artist_id=7,
            comment='Dolores repudiandae voluptate numquam est.',
            rating=5
        )
    review_64 = Review(
            user_id=2,
            artist_id=18,
            comment='Odio nihil est labore tenetur.',
            rating=3
        )
    review_65 = Review(
            user_id=21,
            artist_id=23,
            comment='Quo odit dolore.',
            rating=2
        )
    review_66 = Review(
            user_id=11,
            artist_id=21,
            comment='Inventore ratione in vel quidem alias voluptatum ut unde voluptatibus.',
            rating=3
        )
    review_67 = Review(
            user_id=11,
            artist_id=6,
            comment='Qui ex quam non quia quos et assumenda.',
            rating=2
        )
    review_68 = Review(
            user_id=11,
            artist_id=13,
            comment='Numquam ex fugiat sint quasi voluptatem quisquam ut nisi eveniet.',
            rating=3
        )
    review_69 = Review(
            user_id=14,
            artist_id=31,
            comment='Est cupiditate aperiam nihil ipsa corrupti necessitatibus.',
            rating=4
        )
    review_70 = Review(
            user_id=13,
            artist_id=33,
            comment='Esse ut corrupti.',
            rating=3
        )
    review_71 = Review(
            user_id=7,
            artist_id=1,
            comment='Est vel omnis est.',
            rating=5
        )
    review_72 = Review(
            user_id=16,
            artist_id=24,
            comment='Quaerat et doloremque voluptate.',
            rating=2
        )
    review_73 = Review(
            user_id=9,
            artist_id=3,
            comment='Vero maxime vel cumque aut.',
            rating=3
        )
    review_74 = Review(
            user_id=6,
            artist_id=3,
            comment='Velit est culpa blanditiis minima enim omnis animi.',
            rating=5
        )
    review_75 = Review(
            user_id=9,
            artist_id=14,
            comment='Consequatur fuga velit et assumenda.',
            rating=3
        )
    review_76 = Review(
            user_id=9,
            artist_id=23,
            comment='Aut blanditiis non necessitatibus quam.',
            rating=3
        )
    review_77 = Review(
            user_id=5,
            artist_id=16,
            comment='Officiis ut hic doloremque mollitia quaerat ut reiciendis laboriosam ut.',
            rating=2
        )
    review_78 = Review(
            user_id=10,
            artist_id=24,
            comment='Sint blanditiis ad voluptate magni voluptas atque cum totam.',
            rating=2
        )
    review_79 = Review(
            user_id=7,
            artist_id=13,
            comment='Eligendi sit aperiam eaque aut.',
            rating=1
        )
    review_80 = Review(
            user_id=16,
            artist_id=30,
            comment='Omnis error dicta asperiores.',
            rating=1
        )
    review_81 = Review(
            user_id=21,
            artist_id=9,
            comment='Temporibus tenetur explicabo maxime voluptate et.',
            rating=4
        )
    review_82 = Review(
            user_id=21,
            artist_id=19,
            comment='Ullam consequatur enim quo ut aperiam et eum eligendi saepe.',
            rating=1
        )
    review_83 = Review(
            user_id=16,
            artist_id=16,
            comment='Aliquam nihil doloremque est sint.',
            rating=2
        )
    review_84 = Review(
            user_id=6,
            artist_id=4,
            comment='Est quis nulla aut veritatis reiciendis autem alias.',
            rating=3
        )
    review_85 = Review(
            user_id=10,
            artist_id=21,
            comment='Aut velit quos eos expedita culpa nostrum autem.',
            rating=2
        )
    review_86 = Review(
            user_id=8,
            artist_id=13,
            comment='Vitae tenetur tempora quasi aut veniam qui excepturi animi libero.',
            rating=1
        )
    review_87 = Review(
            user_id=8,
            artist_id=25,
            comment='Voluptatem facere aut.',
            rating=5
        )
    review_88 = Review(
            user_id=17,
            artist_id=6,
            comment='Officiis et aspernatur.',
            rating=1
        )
    review_89 = Review(
            user_id=20,
            artist_id=22,
            comment='Repudiandae beatae illo et vitae deleniti.',
            rating=2
        )
    review_90 = Review(
            user_id=13,
            artist_id=19,
            comment='Aut voluptas recusandae.',
            rating=1
        )
    review_91 = Review(
            user_id=15,
            artist_id=9,
            comment='Beatae et aut ut nostrum mollitia odio mollitia doloremque.',
            rating=4
        )
    review_92 = Review(
            user_id=13,
            artist_id=12,
            comment='Veritatis consequuntur molestiae necessitatibus reprehenderit sed ipsa voluptas.',
            rating=1
        )
    review_93 = Review(
            user_id=6,
            artist_id=10,
            comment='Sint veniam omnis alias amet laudantium id totam.',
            rating=3
        )
    review_94 = Review(
            user_id=18,
            artist_id=22,
            comment='Perferendis at nobis natus eum.',
            rating=3
        )
    review_95 = Review(
            user_id=22,
            artist_id=14,
            comment='Odit officia illo iure excepturi.',
            rating=1
        )
    review_96 = Review(
            user_id=12,
            artist_id=34,
            comment='Aut pariatur eligendi.',
            rating=4
        )
    review_97 = Review(
            user_id=10,
            artist_id=18,
            comment='Distinctio rem sed laudantium.',
            rating=5
        )
    review_98 = Review(
            user_id=11,
            artist_id=19,
            comment='Alias dolorem sit vitae ab repellendus voluptate.',
            rating=5
        )
    review_99 = Review(
            user_id=7,
            artist_id=32,
            comment='Tempora deserunt laudantium.',
            rating=3
        )
    review_100 = Review(
            user_id=14,
            artist_id=9,
            comment='Voluptas aliquid quia.',
            rating=3
        )
    review_101 = Review(
            user_id=8,
            artist_id=24,
            comment='Dolor cupiditate ducimus aspernatur.',
            rating=3
        )
    review_102 = Review(
            user_id=7,
            artist_id=28,
            comment='Et sint aut occaecati.',
            rating=2
        )
    review_103 = Review(
            user_id=18,
            artist_id=33,
            comment='Deleniti eaque quos enim dolor est et architecto.',
            rating=5
        )
    review_104 = Review(
            user_id=18,
            artist_id=15,
            comment='Impedit saepe quos aperiam iste nam excepturi eum sint facere.',
            rating=1
        )
    review_105 = Review(
            user_id=22,
            artist_id=17,
            comment='Porro voluptas doloremque voluptates et.',
            rating=5
        )
    review_106 = Review(
            user_id=12,
            artist_id=24,
            comment='Dolorum rem quo sint.',
            rating=2
        )
    review_107 = Review(
            user_id=22,
            artist_id=28,
            comment='Voluptas et doloremque qui dolorem quo eos.',
            rating=3
        )
    review_108 = Review(
            user_id=4,
            artist_id=7,
            comment='Laudantium ratione veniam facere repudiandae aut quasi quo explicabo iusto.',
            rating=1
        )
    review_109 = Review(
            user_id=1,
            artist_id=9,
            comment='Sint iure repellat est quia labore.',
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

    extra_reviews = [review_11, review_12, review_13, review_14, review_15, review_16, review_17, review_18, review_19, review_20, review_21, review_22, review_23, review_24, review_25, review_26, review_27, review_28, review_29, review_30, review_31, review_32, review_33, review_34, review_35, review_36, review_37, review_38, review_39, review_40, review_41, review_42, review_43, review_44, review_45, review_46, review_47, review_48, review_49, review_50, review_51, review_52, review_53, review_54, review_55, review_56, review_57, review_58, review_59, review_60, review_61, review_62, review_63, review_64, review_65, review_66, review_67, review_68, review_69, review_70, review_71, review_72, review_73, review_74, review_75, review_76, review_77, review_78, review_79, review_80, review_81, review_82, review_83, review_84, review_85, review_86, review_87, review_88, review_89, review_90, review_91, review_92, review_93, review_94, review_95, review_96, review_97, review_98, review_99, review_100, review_101, review_102, review_103, review_104, review_105, review_106, review_107, review_108, review_109]
    for review in extra_reviews:
        db.session.add(review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
