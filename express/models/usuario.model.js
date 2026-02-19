import database from "../database/conexion.js";


class UsuarioModel {

    static getUsuarios(){
      const query = database.prepare('SELECT * FROM usuario;');
      return query.all();
    }

    static getUsuario(id){
      // return arrUsuarios.find(b=>b.id == id);
      const query = database.prepare('SELECT * FROM usuario WHERE id=?;');
      return query.get(id);
    }



    static eliminarUsuario(id){
      const query = database.prepare('DELETE FROM usuario WHERE id=?;');
      const resultado = query.run(id);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;

    }


    static modificarUsuario(id, nombre, descripción){
      const query = database.prepare('UPDATE usuario SET nombre=?, descripción=? WHERE id=?');
      const resultado = query.run(nombre, descripción,id);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;
    }


    static crearUsuario(nombre, email,clave){
      const query = database.prepare('INSERT INTO usuario(nombre,descripción) VALUES(?,?);');
      const resultado = query.run(nombre, descripción);
      if(resultado.changes == 0)
        return null;
      else
        return resultado;
    }



}

export default UsuarioModel;