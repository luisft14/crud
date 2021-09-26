import './App.css';
import React,{Fragment,useState,useEffect} from 'react';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';
import db from './ConfigFirebase';
import { collection, getDocs,addDoc } from "firebase/firestore";
 const arrayListaTarea =[
   {
    clave:'12',
    nombre:'vaca',
    edad:'42',
    salario:'15,000',
    sexo:'disque hombre'
   },
    {
    clave:'1123',
    nombre:'luis',
    edad:'23',
    salario:'15,000',
    sexo:'hombre'
   }
 ];

function App() {

  //const [objetosLista,setObjetosLista]=useState(ArrayListaTarea);
  const [empleados,setEmpleados]=useState(arrayListaTarea);
  //const [editarEmpleado,setEditarEmpleado]=useState(null);
  const [editarEmpleado,setEditarEmpleado]=useState(null);



  const eliminarTarea=(idTarea)=>{
    const arrayActualizado=empleados.filter(empleado=>empleado.clave !==idTarea);
    setEmpleados(arrayActualizado);
  }


  const agregarAlista=(objEmpleado)=>{

    

      const nuevoEmpleado={
        ...objEmpleado,
      }
      const nuevaLista=[
      ...empleados,nuevoEmpleado
      ]

  
    setEmpleados(nuevaLista);
  }

 // const actualizarRegistro=(edtempleados)=>{
   // const cambioEmpleados = empleados.map(empleado=>(
     // empleado.clave === edtempleados.clave
      //?edtempleados
      //:empleados
    //));
    //setEmpleados(cambioEmpleados);
  //}
  const actualizarRegistro=(edtempleados)=>{
    const cambioEmpleado=empleados.map(empleado=>(
      empleado.clave===edtempleados.clave
      ?edtempleados
      :empleado
     
    ));
     setEmpleados(cambioEmpleado);
  }

  return (
    <Fragment>
    <div className="App">
    <div className="row">
    <div id="listaTarea" className="col-8">
      Lista Empleados
      {
        empleados.map(empleado=>
          (
          <ListaTareas empleado={empleado} 
          key={empleado.clave}
          eliminarTarea={eliminarTarea}
          //setEditarEmpleado={setEditarEmpleado}
          setEditarEmpleado={setEditarEmpleado}
          />
          )
        )
      }
    </div>
    <div id="formulario" className="col-4">
      Formulario
      <Formulario 
        agregarAlista={agregarAlista}
        editarEmpleado={editarEmpleado}
        actualizarRegistro={actualizarRegistro}
      />
    </div>    
    </div>

    </div>
    </Fragment>
  );
}


export default App;
