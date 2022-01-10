import React, {useState} from 'react';
import uniqid from "uniqid"
import m from "./Form.module.css"


function Listadonombres() {

    const [nombre, setNombre]=useState("")
    const [listaNombres, setListaNombres]=useState([])
    const [edicion, setModoEdicion]=useState(false)
    const [id,setId]=useState("")
    const [error,setError]=useState(null)
   
    let entrada=document.getElementById("entrada")

    const addNombre=(e)=>{
       
    
        e.preventDefault()
        if(!nombre.trim()){
            setError("Ingrese un nombre")
            return
        }
        const objUsuario={ // Es un objeto
              id:uniqid(), //uniq es una función
              nuevoNombre:nombre
        };
        
        setListaNombres([...listaNombres, objUsuario])
        //entrada.value=""
        setNombre("")
        setError(null)
    };
    const deleteNombre=(id)=>{
        const nuevoArray=listaNombres.filter(item=>item.id!==id)
        setListaNombres(nuevoArray)
    }
    const editar=(item)=>{
        setModoEdicion(true)
        setNombre(item.nuevoNombre)
        setId(item.id)
    }
    const editarNombre=(e)=>{
      

        e.preventDefault()
        const nArray = listaNombres.map(item => item.id === id ? { id: id, nuevoNombre: nombre } : item);
        
        setListaNombres(nArray)
         
        setModoEdicion(false)
        
        setNombre("")
        
       
       
        }
    

    return (
        <div>
            <h2 className={m.title_hdos}>Aplicación Crud</h2>
            <div className='row'>
                <div className='col'>
                    <h2 className={m.name_list}>Listado de nombres</h2>
                    <ul className='list-group'>
                        {
                            listaNombres.map(item=>
                                
                                   <li className='list-group-item'> {item.nuevoNombre}
                                   <button className={m.btn_delete}
                                   onClick={()=>deleteNombre(item.id)}
                                   >
                                       Borrar
                                   </button>
                                   <button className={m.btn_editar}
                                   onClick={()=>editar(item)}
                                   >
                                      Editar
                                   </button>
                                   </li>
                                
                                
                                )
                                
                        }
                    </ul>
                </div>

                <div className='col'>
                    <h2 className={m.title}>Formulario, agregar nombre</h2>
                
                <form 
                className={m.formulario_grupo}
                onSubmit={edicion ? editarNombre : addNombre} 
                >
                   
                    <input value={nombre} id="entrada" className={m.entry} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Enter Name'/>
                    <input 
                     className={m.btn} 
                     type="submit"
                      value={edicion ? "Edit Name": "Register Name"}
                     
                     />
                    
                </form>
                {
                    
                    error!==null ? ( <div className={m.mistake}>{error} </div> )  : (<div></div>)
                    
                }
                </div>
            </div>
        </div>
    );
}

export default Listadonombres;