// import { annotate } from 'rough-notation';
// Or using unpkg
// import { annotate } from 'https://unpkg.com/rough-notation?module';

// const annotation = annotate(btnAccion, { type: 'underline' });
// annotation.show();

const btnAccion = document.querySelector('#btnAcción');

btnAccion.addEventListener("click", async e=>{
  const {annotate} = await import ('rough-notation');
  
  const annotation = annotate(btnAccion, { type: 'underline' });
  annotation.show();
})