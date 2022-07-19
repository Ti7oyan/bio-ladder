import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import getLinks from "../lib/link";
import ILink from "../types/link";

// Components
import ExternalLink from "../components/ExternalLink";

type HomePageType = {
  links: ILink[];
};

const Home: NextPage<HomePageType> = ({ links }: HomePageType) => {
  return (
    <>
      <Head>
        <title>Bio-ladder</title>
      </Head>

      <main>
        <ul className={styles.link_container}>
          {links.map(({ platform, title, url, color }) => (
            <ExternalLink
              key={title}
              platform={platform}
              title={title}
              url={url}
              color={color}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomePageType>
> => {
  const links = await getLinks();
  return {
    props: {
      ...links,
    },
  };
};

export default Home;
