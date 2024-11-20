import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Fetching Data</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <Link to="/">Home</Link>
        </div>

    );


};

export default FetchData;
