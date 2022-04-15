
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/session'

const Dashboard = () => {
    const dispatch = useDispatch();

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

                            <div key={booking.id}>
                                <p>{booking.artist_id}</p>
                                <p>{booking.start_date_time}</p>
                                <p>{booking.end_date_time}</p>
                                <p>{booking.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
