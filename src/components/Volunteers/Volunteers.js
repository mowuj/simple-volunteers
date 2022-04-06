import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Volunteers.css'
const Volunteers = () => {
    const [volunteers,setVolunteers]=useVolunteers()
    return (
        <div>
            <h2>All Volunteers</h2>
            <div className="activity-conainter">
                {
                    volunteers.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;