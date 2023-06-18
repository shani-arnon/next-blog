import Comment from "@/app/(components)/Comment";

interface Post {
    params: {
        postId: string
    }
}
interface PostDetails {
    postId: string
}

export async function loadPostDetails(postId: PostDetails) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return post.json();
}

export default async function PostPage({ params: { postId } }: Post) {
    // @ts-ignore
    const post = await loadPostDetails(postId);
    ; return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" >
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title.toUpperCase()}</div>
                <p className="text-gray-700 text-base">{post.body}</p>
                <Comment postId={post.id} />
            </div>
        </div>
    )
}
