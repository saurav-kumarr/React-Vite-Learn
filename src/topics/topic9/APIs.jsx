import React, { useEffect, useState } from "react";


function APIs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setData(json));
    }, []);

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