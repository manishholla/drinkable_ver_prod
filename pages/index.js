import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>drinkable</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            <a href="https://drinkable.in/"><span className={styles.logo}>
            <Image src="/da.svg" alt="da logo" width={200} height={25} />
          </span></a> under construction
        </h1>

        <p className={styles.description}>
          <text> You might be curious to what is being done here! </text>
        </p>

        <div className={styles.grid}>
                  <a href="https://drinkable.in/contact-us" className={styles.card}>
            <h2>Contact Us &rarr;</h2>
            <p>Any Queries? You may contact us anytime!</p>
          </a>

                  <a href="https://drinkable.in/partner" className={styles.card}>
            <h2>Partner with Us &rarr;</h2>
            <p>Already know about us! Let&apos;s be Partners.</p>
          </a>
     
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://drinkable.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/da.svg" alt="da Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
