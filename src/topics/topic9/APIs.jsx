import React, { useEffect, useState } from "react";
import axios from "axios";
import './PostAPIs';
import PostAPIs from "./PostAPIs";

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
    
    axios.all([
     axios.get('https://jsonplaceholder.typicode.com/posts/'),
     axios.get('https://jsonplaceholder.typicode.com/users')
    ])
      .then(axios.spread((posts, users) => {
        console.log(posts.data)
        console.log(users.data)
        //setData(users.data);
        setLoading(false);
        //throw new Error('Something went Wrong')
    }))

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
            <PostAPIs />
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