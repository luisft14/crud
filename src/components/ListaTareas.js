import React,{Fragment,useState} from 'react';

const ListaTareas=({empleado,eliminarTarea,cfinalizada})=>{
	return(
		<div>
		<h1>Forms</h1>
		<div className="card mt-2">
  			<img src="..." className="card-img-top" alt="..."/>
  			<div className="card-body">
    			<h5 className="card-title">Nombre Empleado: {empleado.nombre}</h5>
    			<h6 className="card-title">edad: {empleado.edad}</h6>
    			<p className="card-text">Salario: {empleado.salario}</p>
    			<p className="card-text">Sexo: {empleado.sexo}</p>
    			<a href="#" className="btn btn-primary m-2">Editar</a>
    			<a href="#" className="btn btn-outline-warning" onClick={()=>eliminarTarea(empleado.id)}>Eliminar</a>
  			</div>
		</div>	
		</div>

	);
}

export default ListaTareas;