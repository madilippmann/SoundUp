
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingCard from './BookingCard';
import * as userActions from '../../store/session'


const Dashboard = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         await dispatch(userActions)
    //         setIsLoaded(() => true)
    //     })()
    // }, [dispatch])


    return (
        <div>
            <h2>Dashboard</h2>

            <h3>Bookings</h3>

            <div>
                <ul>
                    {sessionUser.bookings.map(booking => (
                        <li>
                            <BookingCard booking={booking} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
