
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingCard from './BookingCard';
import ReviewCard from './ReviewCard';
import * as userActions from '../../store/session'

import './Dashboard.css'

const Dashboard = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false);
    const [sortedBookings, setSortedBookings] = useState();
    const [selectedTab, setSelectedTab] = useState('upcoming')

    useEffect(() => {
        setSortedBookings(() => {
            return sessionUser.bookings.reduce((sorted, booking) => {
                if (Date.parse(booking.end_date_time) < Date.parse(new Date())) {
                    sorted['past'].push(booking)
                } else {
                    sorted['upcoming'].push(booking)
                }
                return sorted
            }, { upcoming: [], past: [] })
        })
    }, [sessionUser])


    return (
        <div>
            {/* <h2>Dashboard</h2> */}
            <div className='dashboard__nav'>
                <button
                    className={`dashboard__nav__buttons ${selectedTab === 'upcoming'}`}
                    onClick={() => setSelectedTab('upcoming')}
                    type='button'
                >
                    <h3>Upcoming Bookings</h3>
                </button>

                <button
                    className={`dashboard__nav__buttons ${selectedTab === 'past'}`}
                    onClick={() => setSelectedTab('past')}
                    type='button'
                >
                    <h3>Past Bookings</h3>
                </button>

                <button
                    className={`dashboard__nav__buttons ${selectedTab === 'reviews'}`}
                    onClick={() => setSelectedTab('reviews')}
                    type='button'
                >
                    <h3>Reviews</h3>
                </button>
            </div>

            {selectedTab === 'upcoming' &&
                <div className='card__outer-container'>
                    <div className='card__flex'>
                        {sortedBookings?.upcoming.map(booking => (
                            <div>
                                <BookingCard booking={booking} />
                            </div>
                        ))}
                    </div>
                </div>

            }

            {selectedTab === 'past' &&
                <div className='card__outer-container'>
                    <div className='card__flex'>
                        {sortedBookings?.past.map(booking => (
                            <div>
                                <BookingCard booking={booking} type={'upcoming'} />
                            </div>
                        ))}
                    </div>
                </div>

            }

            {selectedTab === 'reviews' &&
                <div className='card__outer-container'>
                    <div className='card__flex'>
                        {sessionUser.reviews.map(review => (
                            <div>
                                <ReviewCard review={review} type={'reviews'} />
                            </div>
                        ))}
                    </div>
                </div>

            }
        </div>
    );
}

export default Dashboard;
