"use strict";


class Toast {
  constructor(mensaje, tipo, tiempo) {
    
    //1.- Comprobamos si la división en la que vamos a crear los toasts
    //    existe en el documento y si no existe, la creamos
    let divToast = document.querySelector("[data-div-toast]");
    if(!divToast){ 
      divToast = document.createElement("div");
      divToast.style=`
      position:fixed;
      top: 1rem;
      right:1rem;
      min-width: 50%;
      `;
      
      divToast.dataset.divToast="yeah";
      
      document.body.append(divToast);
    }

    //2.- La división divToast existe
    //    Creamos la división con el mensaje
    const divMensaje = document.createElement("div");

    let color = "#3355FFCC";
    if(tipo == Toast.ERROR){
      color = "#FF3355CC";
    }

    divMensaje.style=`background-color: ${color};
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    min-width: 300px;
    text-align:center;
    margin-bottom: 1rem;
    display: flex;
    align-content: center;
    gap: 1rem;
    `;

    const icono = document.createElement("img");
    icono.src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-alert-hexagon%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M19.875%206.27c.7%20.398%201.13%201.143%201.125%201.948v7.284c0%20.809%20-.443%201.555%20-1.158%201.948l-6.75%204.27a2.269%202.269%200%200%201%20-2.184%200l-6.75%20-4.27a2.225%202.225%200%200%201%20-1.158%20-1.948v-7.285c0%20-.809%20.443%20-1.554%201.158%20-1.947l6.75%20-3.98a2.33%202.33%200%200%201%202.25%200l6.75%203.98h-.033z%22%20/%3E%3Cpath%20d=%22M12%208v4%22%20/%3E%3Cpath%20d=%22M12%2016h.01%22%20/%3E%3C/svg%3E";

    divMensaje.append(icono, mensaje)

    divToast.prepend(divMensaje);

    setTimeout( ()=>{
      document.startViewTransition( ()=>{
        divMensaje.remove();
      });
    }, tiempo);

  }

  static INFO = 0;
  static ERROR = 1;
}