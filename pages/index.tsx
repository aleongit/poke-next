import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { siteTitle } from "../components/layout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Pokemon list!
        </h1>

        <p className={styles.description}>
          Click Pokemon!{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>


    </div>
  )
}

export default Home
