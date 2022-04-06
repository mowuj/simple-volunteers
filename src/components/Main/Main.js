import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();

    const [searchResult,setSearchResult]=useState([])

    const searchChange = event => {
        const searchText = event.target.value;
        const match = volunteers.filter(v=>v.title.toLowerCase().includes(searchText))
        setSearchResult(match)
    }
    return (
        <div>
            <h2>Volunteers Activities:{volunteers.length }</h2>
            <div className='search-input'>
                <input onChange={searchChange} type="text" placeholder='search' />
            </div>
            <div className='activity-container'>
                {
                searchResult.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                ></Activity>)
            }
            </div>
        </div>
    );
};

export default Main;