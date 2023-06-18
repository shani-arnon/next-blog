'use client';
import { useEffect } from "react";

type Comment = {
    postId: string;
}
export default function Comment({ postId }: Comment) {
    useEffect(() => {
        console.log('comment component mounted');
        return () => console.log('comment component unmounted');
    }, []);
    
    const handleSubmit = (data: any) => {
        console.log({ data })
    };
    return (
        <>
            {postId}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a comment" />
                <button type="submit">Add comment</button>
            </form>
        </>
    )
}
