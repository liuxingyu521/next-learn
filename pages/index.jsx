import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { title } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>{title}</h2>
      <div>next begin</div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await new Promise((res) =>
    setTimeout(() => {
      res({ title: "next dynamic post data" });
    }, 1000)
  );

  return {
    props: {
      title: res.title,
    },
  };
}
