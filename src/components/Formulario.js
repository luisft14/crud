import React,{Fragment,useState,useEffect} from 'react';

const valoresI={
	clave:"",
	nombre:"",
	salario:"",
	sexo:"",
	archivo:""
}
const ListaTareas=({agregarAlista,editarEmpleado,actualizarRegistro})=>{
	
	const [valoresFormulario,setValoresFormulario]=useState(valoresI);
	const {clave,nombre,salario,sexo,archivo}=valoresFormulario;
	const [error,setError]=useState(null);

	useEffect(()=>{
		if (editarEmpleado) {
			setValoresFormulario(editarEmpleado);
		}
		
	},[editarEmpleado]);

	const cambioFormulario=(e)=>{
		var cambio={};
		
		if (e.target.type==="file") {
			console.log("soy archivo");
			var url=URL.createObjectURL(e.target.files[0]);

			 cambio={
				...valoresFormulario,
				[e.target.name]:e.target.value,
				archivo:URL.createObjectURL(e.target.files[0])
			}
		}else{
		
			 cambio={
				...valoresFormulario,
				[e.target.name]:e.target.value
			}			
		}
		console.log();
		setValoresFormulario(cambio);
	}

	const agregarTarea=(e)=>{
		e.preventDefault();
		console.log("presiono");
		if (clave==="") {
			setError("Debes indicar una clave");
			return
		}
		if (nombre==="") {
			setError("Debes indicar un nombre");
			return
		}
		if (salario==="") {
			setError("Debes indicar un salario");
			return
		}
		if (sexo==="") {
			setError("Debes indicar un sexo");
			return
		}
		//agregarTarea
		if (editarEmpleado) {
			console.log("actualizando");
			actualizarRegistro(valoresFormulario);
			
		}
		else{
			console.log("agregando");
			agregarAlista(valoresFormulario);
		}
		setValoresFormulario(valoresI);
		
		setError(null);
	}

	return(
		<div>
			<h1>Formulario</h1>
			<form onSubmit={agregarTarea}>
			<input 
				type="text" 
				placeholder="Clave del empleado" 
				className="form-control"
				value={clave}
				name="clave"
				onChange={cambioFormulario}
			>
			</input>
			<input 
				type="text" 
				placeholder="Nombre del empleado" 
				className="form-control mt-3"
				value={nombre}
				name="nombre"
				onChange={cambioFormulario}
			>
			</input>
			<input 
				type="text" 
				placeholder="Salario del empleado" 
				className="form-control mt-3 "
				value={salario}
				name="salario"
				onChange={cambioFormulario}
			>
			</input>
			<input onChange={cambioFormulario} className="form-check-input" type="radio" value="Hombre" name="sexo" /> Hombre
        	<input onChange={cambioFormulario} className="form-check-input" type="radio" value="Mujer" name="sexo" /> Mujer
        	<input 
				type="file"  
				className="form-control mt-3 "
				name="archivo"
				onChange={cambioFormulario}
			>
			</input>
			<img src={archivo}height="150" width="150"/>
			<button className="btn btn-primary d-md-block mt-2">Agregar Tarea</button>
			</form>
			{
				error?(
				<div className="alert alert-danger mt-2">{error}</div>
				):null
			}
		</div>

	);
}

export default ListaTareas;