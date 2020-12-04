import Head from "next/head";
import styles from "@src/styles/Home.module.css";
import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";

export default function Home(props) {
  const { allPostsData } = props;
  return (
    <div className={styles.container}>
      <h2>blog home</h2>
      <ul>
        {allPostsData.map((post) => {
          return (
            <li key={post.date}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
