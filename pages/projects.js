import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/layout.module.css';
import Link from 'next/link';

export default function Projects() {
  return(
    <Layout>

      <div className={styles.post}>
        <Link className={styles.titulo} href="https://github.com/PriscilaRoza/insta" > Insta Clone </Link>
        <img className={styles.img} src="/images/insta.png"  alt="instagram" />
        <p>Nesse projeto aprendi várias tecnicas de css</p>
      </div>
      <div className={styles.post}>
      <Link className={styles.titulo} href="https://github.com/PriscilaRoza/cloneNetflix" > NetFlix Clone </Link>
        <img className={styles.img} src="/images/imgNetflix.png" alt="netflix clone" />
        <p>Nesse Projeto tive oportunidade de entender melhor as classes containers e o que é uma wrapper.
      Foi usado HTML5, CSS3 e JavaScript.
      Como tornar um site responsivo com o flexbox e
      aprendi a usar o plugin Jquery.</p>
      </div>
      <div className={styles.post}>
      <Link className={styles.titulo} href="https://github.com/PriscilaRoza/snakegame" > Jogo da cobrinha </Link>
        <img className={styles.img} src="/images/imgSnake.png" alt="jogo da cobrinha" />
        <p>Esse Projeto foi bem desafiador por ser a primeira  vez que usei o canvas</p>
      </div>
      <div className={styles.post}>
      <Link className={styles.titulo} href="https://github.com/PriscilaRoza/google-clone" > Google Clone </Link>
        <img className={styles.img} src="/images/google.png" alt="google clone" />
      <p>Feito em css</p>
      </div>
      <div className={styles.post}>
      <Link className={styles.titulo} href="https://github.com/PriscilaRoza/Tic-tac-toe-react-js" > Jogo da velha em React </Link>
        <img className={styles.img} src="/images/jogodavelha.png" alt=" jogo da velha" />
      <p>foi meu primeiro projeto em reactjs</p>
      </div>
    </Layout>
  )
}