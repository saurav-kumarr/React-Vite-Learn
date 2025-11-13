import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postActions";
import { useEffect } from "react";

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts)

    useEffect( () => {
        dispatch(fetchPosts());
    }, [dispatch]);

if (loading) return <p>Loading...</p>
if(error) return <p>Error: {error}</p>

    return (
        <div className="mt-16">
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;