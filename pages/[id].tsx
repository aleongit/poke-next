import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next"

import Head from "next/head"
import { getPokemonsIds, getPokemonData } from "../lib/pokemons_lib"
import styles from "../styles/Home.module.css"

//getStaticPaths which returns an array of possible values of id
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPokemonsIds()
  console.log("paths a [id]")
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

//getStaticProps which fetches necessary data for the post with id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemonData = await getPokemonData(params?.id)
  return {
    props: {
      pokemonData,
    },
  }
}

//react component to render this page
const Pokemon: NextPage = ({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("pokemon data a template Pokemon ")
  console.log(pokemonData)
  return (
    <div className={styles.container}>
      <Head>
        <title>{pokemonData.data.name} detail</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{pokemonData.data.name} !</h1>
        <p className={styles.description}>id_____ {pokemonData.data.id}</p>
        <div className="img">
          <img
            src={pokemonData.data.sprites.front_default}
            alt={pokemonData.data.name}
            width={200}
          ></img>
        </div>
      </main>
    </div>
  )
}

export default Pokemon