import { useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

function Saludo() {
  const [peticion, setPeticion] = useState(null)

  const navigate = useNavigate()
  const Saludo = async () =>{
    setPeticion(undefined)
    const nombre = document.querySelector("#input").value
    console.log(nombre)
    const resultado = (await fetch(`http://localhost:3000/saludo/${nombre}`)).text()
    setPeticion(await resultado)
  }
  return (
    <>
    <div>
      <h1>Ingrese nombre:</h1>
      <h2 >{peticion}</h2>
      <input type="text" placeholder='Acá...' id="input" />
      <button type="button" disabled={peticion === undefined ? true : false} onClick={()=>Saludo()} >{
        peticion === undefined ? "Banque" : "Pedir Saludo"
        }</button>
    </div>
    <div style={{margin:"10px"}}>
        <button className='vip' onClick={()=>navigate("/vip")}>Pedir saludo vip </button>
    </div>
    </>
  )
}

export default Saludo
