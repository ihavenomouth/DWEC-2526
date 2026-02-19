import database from "../database/conexion.js";


class BibliotecaModel {

    static getBibliotecas(){
      const query = database.prepare('SELECT * FROM biblioteca;');
      return query.all();
    }

    static getBiblioteca(id){
      // return arrBibliotecas.find(b=>b.id == id);
      const query = database.prepare('SELECT * FROM biblioteca WHERE id=?;');
      return query.get(id);
    }



    static eliminarBiblioteca(id){
      const query = database.prepare('DELETE FROM biblioteca WHERE id=?;');
      const resultado = query.run(id);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;

    }


    static modificarBiblioteca(id, nombre, descripción){
      const query = database.prepare('UPDATE biblioteca SET nombre=?, descripción=? WHERE id=?');
      const resultado = query.run(nombre, descripción,id);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;
    }


    static crearBiblioteca(nombre, descripción){
      const query = database.prepare('INSERT INTO biblioteca(nombre,descripción) VALUES(?,?);');
      const resultado = query.run(nombre, descripción);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;
    }



}

export default BibliotecaModel;