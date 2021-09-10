import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/layout.module.css';
import { pegarPostsPorData } from '../lib/post';
import Link from 'next/link';
import Date from '../components/date';


export default function Home({ dadosDosPosts }) {
  console.log(dadosDosPosts)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section>
        <p>Estudante de Front-end na Blue Edtech e Análise e desenvolvimento de sistemas. <Link href="../projects"> Clique aqui para ver meus principais projetos</Link></p>
        
        
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {
            dadosDosPosts.map( ({id, date, title}) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <small>
                  <Date dateString={date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const dadosDosPosts = pegarPostsPorData();
  return {
    props: {
      dadosDosPosts
    }
  }
}