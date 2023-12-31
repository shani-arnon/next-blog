export async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

type Post = {
    id: string
    title: string
};

export default async function BlogPage() {
    const posts = await loadPosts();
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: Post) => (
                    <>
                        <li key={post.id}>
                            <a href={`/blog/${post.id}`}>{post.title}</a>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}