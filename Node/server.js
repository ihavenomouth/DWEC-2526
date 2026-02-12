
// console.log("Hola caracola");

// console.log(process.argv);

// if( process.argv.length != 5){
//   console.error("Debe inicar tres parámtro");
//   process.exit(1);
// }

// const primerNumero = Number(process.argv[2]);
// const segundoNumero = Number(process.argv[3]);
// const tercerNumero = Number(process.argv[4]);

// console.log( primerNumero + segundoNumero + tercerNumero);


// console.log(import.meta.url)

import { readFile, writeFile,appendFile } from 'node:fs/promises';
// import {join} from 'node:path';
// const archivo = join(import.meta.dirname,"datos.txt")

const filePath = new URL('./saludo.txt', import.meta.url);
try {
  
  const contents = await readFile(filePath, { encoding: 'utf8' });

  // console.log(contents);
  let i=1;
  for(let fila of contents.split("\n")){
    console.log(`Fila ${i}: ${fila}`);
    i++;
  }

} catch (err) {
  console.error(err.message);
}

try{
  await writeFile(filePath, "Adiós caracol\n", {encoding: "utf-8"});
  await appendFile(filePath, "Segunda línea\n", {encoding: "utf-8"})
}
catch(error){
  console.error(error);
}

// Leeer una varaible de entorno
console.log(process.env.PUERTO)


// Ejercutar una orden de la línea de comando
import { execSync } from 'node:child_process';

const resultado = execSync("ls -l");

console.log("El resultado es \n"+ resultado);
