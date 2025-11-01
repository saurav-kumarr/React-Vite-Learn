import axios from "axios";
import React, { useState } from "react";

function PostAPIs() {

    const [data, setData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(response => {
            console.log('New Post Added: ',response.data);
            setData([response.data]);
        })
    };

    return(
        <div>
            <h3>Post API's</h3>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
}

export default PostAPIs;