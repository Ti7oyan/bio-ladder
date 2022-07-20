import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import type ILink from "../types/link";
import type IProfile from "../types/profile";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import getLinks from "../lib/link";
import getProfile from "../lib/profile";

// Components
import ExternalLink from "../components/ExternalLink";
import Profile from "../components/Profile";

type HomePageType = {
  links: ILink[];
  profile: IProfile;
};

const Home: NextPage<HomePageType> = ({ links, profile }: HomePageType) => {
  return (
    <>
      <Head>
        <title>Bio-ladder</title>
      </Head>

      <main className={styles.container}>
        <Profile
          firstName={profile.firstName}
          lastName={profile.lastName}
          picture={profile.picture}
          role={profile.role}
          description={profile.description}
        />

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
  const profile = await getProfile();
  return {
    props: {
      ...links,
      ...profile,
    },
  };
};

export default Home;
