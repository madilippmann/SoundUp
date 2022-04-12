const state = {
    sessionUser: {
        id: 1,
        email: "<email>",
        name: "<name>",
        bookings: [
            {
                id: 1,
                userId: 1,
                aristId: 1,
                description: "<description>",
                date: new Date("<date>"),
                confirmed: true
            },
            {
                id: 2,
                userId: 1,
                aristId: 2,
                description: "<description>",
                date: new Date("<date>"),
                confirmed: true
            },
        ],
        favorites: [
            {
                id: 1,
                userId: 1,
                artistId: 1
            }
        ]

    },
    artists: {
        1: {
            id: 1,
            name: "<name>",
            bio: "<bio>",
            rate: 200.00,
            profileImageUrl: "<url>",
            audioUrl1: "<url>",
            audioUrl2: "<url>",
            audioUrl3: "<url>",
            genres: [
                {
                    id: 1,
                    name: "<genre name>"
                },
                {
                    id: 2,
                    name: "<genre name>"
                }
            ],
            reviews: [
                {
                    id: 1,
                    userId: 1,
                    artistId: 1,
                    title: "<review title>",
                    comment: "<comment>",
                    rating: 5,
                    createdAt: Date("<date>")
                },
            ]
        },
        2: {
            id: 2,
            name: "<name>",
            bio: "<bio>",
            rate: 600.00,
            profileImageUrl: "<url>",
            audioUrl1: "<url>",
            audioUrl2: "<url>",
            audioUrl3: "<url>",
            genres: [
                {
                    id: 2,
                    name: "<genre name>"
                }
            ],
            reviews: []
        }
    },
}
