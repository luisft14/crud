import React,{Fragment,useState} from 'react';

const valoresI={
	clave:"",
	nombre:"",
	salario:"",
	sexo:""
}
const ListaTareas=({agregarAlista})=>{
	const [valoresFormulario,setValoresFormulario]=useState(valoresI);
	const {clave,nombre,salario,sexo}=valoresFormulario;
	const [error,setError]=useState(null);

	const cambioFormulario=(e)=>{
		const cambio={
			...valoresFormulario,
			[e.target.name]:e.target.value
		}
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
		agregarAlista(valoresFormulario);
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
        	<input onChange={cambioFormulario} className="form-check-input" type="radio" value="Aldaira" name="sexo" /> Aldaira
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