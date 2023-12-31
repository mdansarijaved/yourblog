'use client'
import { useGetPostsQuery } from "@/store/posts"
import Blog from "@/components/blog";
import styles from './blogs.module.css'
import Nav from "@/components/nav-bar";


export default function Blogs() {
    const { data: blogs, isLoading } = useGetPostsQuery();
    
    if (isLoading) return <div>Loading...</div>

    // Assuming 'blogs' is an array of posts, map over it to render each post
    return (
        <div className={styles.main}>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id} 
                    blog={blog}
                />
            ))}
        </div>
    )
}
