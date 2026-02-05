import { useEffect, useState } from "react";

function Datatable({ datos }) {

  const [datosFiltrados, setDatosFiltrados] = useState(datos);

  const filtrar = (e)=>{
    const texto=e.target.value.toLowerCase().trim();
    setDatosFiltrados(  datos.filter(u=>{
      return u.nombre.toLowerCase().includes( texto  )
    })  )
  }

  useEffect(()=>{setDatosFiltrados(datos)},[datos])

  return (
    <>
    
      <div className="my-4">
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Filtrar" onInput={filtrar} />
        </label>
      </div>



      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.map(u => {
              return (
                <tr key={u.id}>
                  <th>{u.id}</th>
                  <td>{u.nombre}</td>
                  <td>
                    {u.rol == "admin" ? (
                      <div className="badge  badge-primary">Admin</div>
                    ) : (
                      <div className="badge badge-outline">User</div>
                    )}
                  </td>
                  <td>Eliminar</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Datatable;
