import { readFile, writeFile } from "fs/promises";

const exec = async () => {

  //Ecrevendo arquivo
  // console.log('escrevendo no arquivo...')

  // const list = ['Diones', 'Luciana', 'Ana', 'maros', 'mk'];
  // const listTxt = list.join('\n')

  // await writeFile('./teste.txt', listTxt);
  // console.log("Pronto")

  //Lendo arquivo
  const fileContent = await readFile('./teste.txt', { encoding: 'utf-8' })
  
  const list = fileContent.split('\n');

  console.log(list);
}

exec();