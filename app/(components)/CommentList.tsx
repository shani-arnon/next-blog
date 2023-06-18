'use client';
import { useEffect, useState } from "react";

type Comment = {
    postId: string;
}
export default function Comment({ postId }: Comment) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadComments = async (postId: string) => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await res.json();
        console.log({ comments })
        setComments(comments);
        setLoading(false);
    }

    useEffect(() => {
        console.log('comment component mounted');
        return () => console.log('comment component unmounted');
    }, []);

    return (
        <>
            <h2>Post ID: {postId}</h2>
            <button onClick={() => loadComments(postId)}>Load comments</button>
            {!loading && (
                <ul>
                    {comments.map((c: any) => (
                        <div key={c.id}>
                            <li>
                                <h3>{c.name} - {c.email}</h3>
                                <p>{c.body}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </>
    )
}
