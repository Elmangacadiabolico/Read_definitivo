import { createContext , useState} from "react";
import logo from '../img/Lucifer feliz :D.png';

export const MisDatos = createContext();


const Myprovaider = ({children}) => {

  const[ Datos,setDatos] = useState([
    {id :1, 
    nombre : "El Admin" , 
  
  description: "Soy el creador de esta pagina",
  img : logo
},
{id : 2, 
nombre : "Yo solia ser un jefe ", 
description: "Este es un manga donde nuestro prota era un jefe de mazmora  ", 
img: "https://i2.wp.com/senpaiediciones.com/wp-content/uploads/2022/11/unknownPhotonoise_scaleLevel3width-450.png"},

{
  id :3 , nombre:"Solo leveling", description:"Es una persona que fue traicionada", img:"https://www.gamingcoffee.com/wp-content/uploads/2022/01/solo-leveling-.jpg" },

{id : 4,nombre:"youju senki ", description:"Una  persona rencarnada en la era de la WWI ", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHvfSpc_MghJJmB5I2flZErlDoe8OQTSMfPQ0RwoFwSd0hjck2nVGwwGHLsrAIorJ_k8&usqp=CAU"},
{id : 5,nombre:"Hector", description:"Un profe de programacion", img:"data:image/jpeg;base64,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"}, 
{id:6, nombre:"Tensei Shidata Slime Datta Ken",description:"Es el volumen 6 de la novela adaptada al manga" ,img:"https://nartag.com/storage/manga/tensei-shitara-slime-datta-ken/capitulo-112-surge-un-problema/001.jpg" }

])

const cantidadDatos = Datos.length;

  return (  
    <div>
     <MisDatos.Provider value={{Datos,setDatos}}>
       {children}
      </MisDatos.Provider> 
    </div>
  );
}

export default Myprovaider;