import React, { useEffect, useState } from "react";
import axios from "axios";

function APIs() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
        //throw new Error('Something went Wrong')
    })

     axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log(response.data)
        setData(response.data);
        setLoading(false);
        //throw new Error('Something went Wrong')
    })

    .catch((error) => {
        console.log(`Error fetching data: `, error);
        setError('Failed to fetch the data');
        setLoading(false);
    });
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>API's</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <p><strong>{post.title}</strong></p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default APIs;