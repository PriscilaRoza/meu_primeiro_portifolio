import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const name = 'Priscila Roza'
export const siteTitle = 'Priscila Roza | Desenvolvedora Front-End'

export default function Layout({ home, children }) {
  return (
    <div className={styles.container}>

      <Head>
        <meta 
          name="description"
          content="Priscila Roza | Desenvolvedora Front-end"
        />
        <meta name="title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
            <>
              <img
                src="/images/eu.jpg"
                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
                alt={name}
              />
              <h1 className={styles.heading2XL}>{name}</h1>
            </>
            
          ) : (
            <>
              <Link href="/">
                <img
                  src="/images/eu.jpg"
                  className={`${styles.headerImage} ${styles.borderCircle}`}
                  alt={name}
                />
              </Link>
              <h2 className={styles.headingLg}>
                <Link href="/" className={styles.colorLink}>
                  {name}
                </Link>
              </h2>
              
            </>
          )
        }
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ⬅️ Voltar
          </Link>
        </div>
      )}
    </div>
  )
}