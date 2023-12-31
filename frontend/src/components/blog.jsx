import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./blogcontent.module.css";
import CreatedBy from "./CreatedBy";
import Link from "next/link";
import remarkGfm from 'remark-gfm'
import Markdown from "./Markdown";
const Blog = ({ blog }) => {
  const { title, content, create_by: uid } = blog;

  return (
    <div className={styles.main}>
      <CreatedBy blog={blog} />
      <div className={styles.blogbody}>
        <Link href={`/blog/${blog.id}`}>
          <h1 className={styles.tittle}>{title}</h1>
        </Link>
        <Markdown>
          {content}
        </Markdown>
      </div>
    </div>
  );
};

export default Blog;

