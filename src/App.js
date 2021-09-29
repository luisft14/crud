import './App.css';
import React,{Fragment,useState,useEffect} from 'react';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';
import db from './ConfigFirebase';
import { collection, getDocs,addDoc } from "firebase/firestore";
const arrayListaTarea =[];

function App() {

  //const [objetosLista,setObjetosLista]=useState(ArrayListaTarea);
  const [empleados,setEmpleados]=useState(arrayListaTarea);
  //const [editarEmpleado,setEditarEmpleado]=useState(null);
  const [editarEmpleado,setEditarEmpleado]=useState(null);
  const[cambiarEstado,setCambiarEstado]=useState(null);



  const eliminarTarea=(idTarea)=>{
    const arrayActualizado=empleados.filter(empleado=>empleado.clave !==idTarea);
    setEmpleados(arrayActualizado);
  }


  const agregarAlista=(objEmpleado)=>{
    console.log("archivo");
    console.log(objEmpleado.archivo);
    var url=objEmpleado.archivo;

        const agregarDatos=async()=>{
      console.log("entro al metodoo agregar");
      const datos= await addDoc(collection(db,'empleados'),{
        clave:objEmpleado.clave,
        foto:url,
        nombre:objEmpleado.nombre,
        salario:objEmpleado.salario,
        sexo:objEmpleado.sexo
      });
      
    }
    agregarDatos();
    setCambiarEstado({true:true});
      //const nuevoEmpleado={
      //  ...objEmpleado,
      //}
      //const nuevaLista=[
      //...empleados,nuevoEmpleado
      //]

  
    //setEmpleados(nuevaLista);
  }
  const arregloVacio=[];
  useEffect(()=>{
    console.log("se ejecuto el efecto");
    const obtenerDatos=async()=>{
      const datos= await getDocs(collection(db,'empleados'));
       const arregloDatos=[];
      datos.forEach((documento)=>{
          arregloDatos.push({
          id:documento.id,...documento.data()
        });

        console.log("documento");
      });
      setEmpleados(arregloVacio);
      setEmpleados(arregloDatos);
      
      
    }
    obtenerDatos();

  },[cambiarEstado]);
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
