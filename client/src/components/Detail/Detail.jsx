import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import style from "./Detail.module.css"

export default function Detail() {
    const [pais,setPais]=useState({});
    const {id}=useParams();

    const detallePais=async()=>{
      try {
        const {data}= await axios.get(`http://localhost:3001/countries/${id}`)
        console.log("detalle",data)
        if(data.id){
          setPais(data)
        }
      } catch (error) {
        window.alert('No se encontraron paises');
      }
    }
    useEffect(()=>{
      detallePais()
    },[])

    return (
      <div className={style.detail}>  
        <div className={style.container}>
          <div className={style.img}>
            <img src={pais.bandera}/>
          </div>
          <div className={style.detalles}>
            <h4>{pais.name}</h4>
            <h4>{pais.id}</h4>
            <h4>Continente: {pais.continente}</h4>
            <h4>Capital: {pais.capital}</h4>
            <h4>Subregion: {pais.subregion}</h4>
            <h4>Area: {pais.area}km²</h4>
            <h4>Poblacion: {pais.poblacion}</h4>   
          </div> 
        </div>
      </div>
    );
  }
  