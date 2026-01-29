import arrImagenes from "@/assets/imagenes";


function Galeria(){

  // console.log(arrImagenes);
  return(<article className="flex flex-wrap gap-4 justify-center">

    {
      arrImagenes.map( img=> 
        <div key={img.id}>
          <img src={img.url}/>
          <p>Autor: {img.autor}</p>
        </div>
      )
    }
  </article>)
}

export default Galeria;