import { annotate } from 'rough-notation';
// Or using unpkg
// import { annotate } from 'https://unpkg.com/rough-notation?module';

const btnAccion = document.querySelector('#btnAcción');
const annotation = annotate(btnAccion, { type: 'underline' });
annotation.show();