import { parseISO, format } from "date-fns";

//para colocar em ordem de data
export default function Date({ dateString }) { 
  
  //pegar a string e converter para data
  const date = parseISO(dateString);
  //time é uma tag semantica do html que representa horas
  //vai pegar da data convertida na sequencia dia,mês,ano
  return <time dateTime={dateString}>{ format(date, 'dd/MM/yyyy') }</time>
}