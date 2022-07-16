import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import getLinks from "../lib/link";
import SOCIALS from "../models/socials";
import ILink from "../types/link";

type HomePageType = {
  links: ILink[];
};

const Home: NextPage<HomePageType> = ({ links }: HomePageType) => {
  return (
    <>
      <Head>
        <title>Bio-ladder | </title>
      </Head>

      {links.map((link) => (
        <p key={link.platform}>
          {SOCIALS[link.platform]}
          {link.title}
          {link.url}
        </p>
      ))}
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
