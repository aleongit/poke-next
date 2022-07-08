import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { siteTitle } from "../components/layout";
import { getPokemonsData, PokemonType } from "../lib/pokemons_lib";

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
  const allPokemonData = await getPokemonsData();
  console.log("allPokemonData");
  console.log(allPokemonData);

  return {
    props: {
      allPokemonData,
    },
  };
};

//export async function getStaticProps() {}

const Home: NextPage = ({
  allPokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Pokemon list!</h1>

        <p className={styles.description}>Click Pokemon! </p>

        <div >
          <ul className={styles.grid}>
            {allPokemonData.map((pokemon: PokemonType, index: number) => (
              <li className={`${styles.card} ${styles.card_grid}`} key={index}>
                {/*
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            */}
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>

        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </main>
    </div>
  );
};

export default Home;
