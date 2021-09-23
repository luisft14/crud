import './App.css';
import React,{Fragment,useState,useEffect} from 'react';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';
import db from './ConfigFirebase';
import { collection, getDocs,addDoc } from "firebase/firestore";
 const ArrayListaTarea =[
   {
    id:1,
    clave:'12',
    nombre:'vaca',
    edad:'42',
    salario:'15,000',
    sexo:'disque hombre'
   },
    {
    id:2,
    clave:'12',
    nombre:'luis',
    edad:'23',
    salario:'15,000',
    sexo:'hombre'
   }
 ];

function App() {

  const [objetosLista,setObjetosLista]=useState(ArrayListaTarea);
  const[empleados,setEmpleados]=useState(ArrayListaTarea);



  const eliminarTarea=(idTarea)=>{
    const arrayActualizado=objetosLista.filter(objetoTarea=>objetoTarea.id !==idTarea);
    setObjetosLista(arrayActualizado);
  }
  const cfinalizada =(idTarea)=>{
    
    const cambiarEstado=objetosLista.map(objTarea=>{
      const copia={
        ...objTarea,finalizada:!objTarea.finalizada
      }
      if (objTarea.id===idTarea) {
        return copia
      }else{
        return objTarea
      }
    });
    setObjetosLista(cambiarEstado);
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

  return (
    <Fragment>
    <div className="App">
    <div className="row">
    <div id="listaTarea" className="col-8">
      Lista Tareas
      {
        empleados.map(empleado=>
          (
          <ListaTareas empleado={empleado} 
          key={empleado.id}
         // eliminarTarea={eliminarTarea}
          //cfinalizada={cfinalizada}
          />
          )
        )
      }
    </div>
    <div id="formulario" className="col-4">
      Formulario
      <Formulario agregarAlista={agregarAlista}/>
    </div>    
    </div>

    </div>
    </Fragment>
  );
}


export default App;
