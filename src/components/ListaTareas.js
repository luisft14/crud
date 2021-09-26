import React,{Fragment,useState} from 'react';

const ListaTareas=({empleado,eliminarTarea,setEditarEmpleado})=>{

	return(
		<div>
		<h1>Empleado</h1>
		<div className="card mt-2">
  			<div className="card-body">
    			<h5 className="card-title">Nombre Empleado: {empleado.nombre}</h5>
    			<h6 className="card-title">edad: {empleado.edad}</h6>
    			<p className="card-text">Salario: {empleado.salario}</p>
    			<p className="card-text">Sexo: {empleado.sexo}</p>
    			<p className="card-text">Imagen: <img src={empleado.archivo}height="150" width="150"/></p>
    			<a href="#" className="btn btn-primary m-2"
    				onClick={()=>setEditarEmpleado(empleado)}
    			>
    				Editar
    			</a>
    			<a href="#" className="btn btn-outline-warning" onClick={()=>eliminarTarea(empleado.clave)}>Eliminar</a>
  			</div>
		</div>	
		</div>

	);
}

export default ListaTareas;