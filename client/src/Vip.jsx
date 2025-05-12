import { useState } from 'react'
import { useNavigate } from 'react-router';
import si from "./public/baile.gif"
import "./vip.css"
function Vip() {
  const navigate = useNavigate()
  const [peticion, setPeticion] = useState(null)
  document.body.classList.add('bienvip');
  const Saludo = async () =>{
    setPeticion(undefined)
    const nombre = document.querySelector("#input").value
    console.log(nombre)
    const resultado = (await fetch(`http://localhost:3000/saludovip/${nombre}`)).text()
    setPeticion(await resultado)
    console.log(peticion)
  }
  return (
    <>
    <div>
      <h1 className='shadow-dance-text'>Ingrese nombre:</h1>
      <h2 >{peticion}</h2>
      {(peticion == null | peticion == "Ese nombre está maldito.")  ? "" :  <img src={si} alt="" srcset="" /> }
      <input type="text" placeholder='Acá...' id="input" />

      <button type="button" disabled={peticion === undefined ? true : false} onClick={()=>Saludo()} >{
        peticion === undefined ? "Banque" : "Pedir Saludo"
      }</button>
      {(peticion == null | peticion == "Ese nombre está maldito.")  ? "" :  <img src={si} alt="" srcset="" /> }

    </div>
    <div style={{margin:"10px"}}>
        <button className='vip' onClick={()=>navigate("/")} >Pedir saludo de pobre </button>
    </div>
    </>
  )
}

export default Vip
