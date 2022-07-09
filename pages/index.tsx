import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { siteTitle } from "../components/layout"
import { getPokemonsData, PokemonListType } from "../lib/pokemons_lib"
import { useRouter } from "next/router"

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
  const allPokemonData = await getPokemonsData()
  console.log("allPokemonData")
  //console.log(allPokemonData)

  return {
    props: {
      allPokemonData,
    },
  }
}

//export async function getStaticProps() {}

const Home: NextPage = ({
  allPokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("a index!")
  const router = useRouter()
  const { view } = router.query
  console.log(view)

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Pokemon list!</h1>

        <p className={styles.description}>Click Pokemon! </p>

        <div>
          <ul className={view === "list" ? styles.list : styles.grid}>
            {allPokemonData.map((pokemon: PokemonListType, index: number) => (
              <Link href={`/${pokemon.name}`}>
                <li
                  className={
                    view === "list"
                      ? `${styles.card} ${styles.card_list}`
                      : `${styles.card} ${styles.card_grid}`
                  }
                  key={index}
                >
                  <a>{pokemon.name}</a>
                </li>
              </Link>
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

export default Home
