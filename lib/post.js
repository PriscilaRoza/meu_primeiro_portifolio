import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

//o fs serve para importar arquivos e transforma-los em variaveis para usa-los
// o path serve para saber o caminho das pastas
const caminhoDoDiretorio = path.join(process.cwd(), 'posts');
//dentro de caminhoDoDiretorio vai retornar '/posts'

// listar na tela inicial todos os posts que existem
export function pegarPostsPorData() {

  // pegar o nome de todos os arquivos na pasta /posts
  const nomeDosArquivos = fs.readdirSync(caminhoDoDiretorio);
  // a função de readdirSync é ler diretorio / posts

  // -----------------------------------------------------
  // retorna [{id: 'post01', data}, {}, {}]
  const dadosDosPost = nomeDosArquivos.map( arquivo => {

        //replace remove o .md que é o nome do tipo do arquivo que não será util para usar como id
    const id = arquivo.replace(/\.md$/, '');
    /* as barras /\ é para o replace ignorar oque tem antes de .md e
 o $/ é para todos os arquivos que terminam com.md vai substituir .md por nada = '' */

    // cria uma variável com o caminho do post ex: '/posts/post01.md'
    const caminhoDeCadaPost = path.join(caminhoDoDiretorio, arquivo)

    // pega o conteúdo de um arquivo
    const conteudoDoArquivo = fs.readFileSync(caminhoDeCadaPost, 'utf-8')

    //matter vai marcar quando tiver paragrafo,ponto, letras maiusculas,minusculas, mapeando o conteudo
    const formatadorMatter = matter(conteudoDoArquivo)
//data = title e date dos posts vai retornar um id+ title+ date
    return {
      id, ...formatadorMatter.data
    }
  })

  //sort ordena as os posts por data
  return dadosDosPost.sort( (a, b) => {

    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

}

// -----------------------------------------------

export function pegarTodosOsIds() {
  const nomeDosArquivos = fs.readdirSync(caminhoDoDiretorio)
  return nomeDosArquivos.map( arquivo => {
    //params vai fazer um {com todos os ids sem o .md}
    return {
      params: {
        id: arquivo.replace(/\.md$/, '')
      }
    }
  })
}

//pegar o conteudo de cada post e transformar em html
//vai retornar um id, um conteudo em html
export async function pegarDadosDoPost(id) {

//essa const vai pegar o caminho do id +.md
  const caminhoDoArquivo = path.join(caminhoDoDiretorio, `${id}.md`)

  const conteudoDoArquivo = fs.readFileSync(caminhoDoArquivo, 'utf8')

  const formatadorMatter = matter(conteudoDoArquivo)

  const conteudoProcessado = await remark()
  //marcar o arquivo em html
    .use(html)
    //content é o conteudo do post, texto, imagem ...
    .process(formatadorMatter.content)

    // vai transformar em uma string formatada
  const conteudoHtml = conteudoProcessado.toString();

  return {
    id,
    conteudoHtml,
    ...formatadorMatter.data
  }
}