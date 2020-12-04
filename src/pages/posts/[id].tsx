import { getAllPostIds, getPostData } from "@/lib/post";
import styles from "@src/styles/Home.module.css";

export default function post(props) {
  return (
    <div className={styles.container}>
      <div>{props.postData.title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: props.postData.htmlContent }}
      ></div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
