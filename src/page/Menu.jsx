import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { NavMenu } from '../Components/menuComponents/NavMenu';
import { SandwichJamo } from '../Components/menuComponents/SandwichJamo';
import { SandwichJamonyqueso } from '../Components/menuComponents/SandwichJamonyqueso';
import {Derretidos} from '../Components/menuComponents/Derretidos';
import { SandwichDePollo } from '../Components/menuComponents/SandwichDePollo';
import { SandwichpolloPierna } from '../Components/menuComponents/SandwichpolloPierna';
import { PostreHojas } from '../Components/menuComponents/PostreHojas';
import { PiernaCerdo } from '../Components/menuComponents/PiernaCerdo';
import { Bebidas } from '../Components/menuComponents/Bebidas';
import { Batidos } from '../Components/menuComponents/Batidos';



const Menu = () => {

  const [activeComponent, setActiveComponent] = useState("menu");


  function handleComponentClick(componentName) {
    setActiveComponent(componentName);
  }


  return (


    <>

<div className="position-fixed z-1 w-100 text-white ">
        <Navbar />
      </div>
  
    <section className=" d-flex justify-content-center flex-column w-100" >

     


      <div className="menu">

 <p className="position-absolute">Menu</p> 

 <div className="opacity"></div>
      </div>





      <div className="d-flex justify-content-center align-items-center flex-column gap-5 w-100  p-5">

        <ul className='menuNav'>
        
         <li onClick={() => handleComponentClick('menu')}>Menu</li>
         <li onClick={() => handleComponentClick('sandwichJamon')}>Sandwich de jamon</li> 
         <li onClick={() => handleComponentClick('sandwichJamonyqueso')}>Sandwich de jamon y queso</li> 
         <li onClick={() => handleComponentClick('derretidos')}>Derretidos</li> 
         <li onClick={() => handleComponentClick('sandwichPollo')}>Sandwich de pollo</li> 
         <li onClick={() => handleComponentClick('sandwichPolloyPierna')}>Sandwich de pollo y pierna</li> 
         <li onClick={() => handleComponentClick('postreHojas')}>Postre de hojas</li> 
         <li onClick={() => handleComponentClick('piernaDeCerdo')}>Pierna de cerdo</li> 
         <li onClick={() => handleComponentClick('bebidas')}>Bebidas</li> 
         <li onClick={() => handleComponentClick('batidos')}>Batidos</li> 

        
        
        </ul>

<div className="OpcionesDeMenu">



{activeComponent === 'menu' && <NavMenu />}
{activeComponent === 'sandwichJamon' && <SandwichJamo />}
{activeComponent === 'sandwichJamonyqueso' && <SandwichJamonyqueso />}
{activeComponent === 'derretidos' && <Derretidos/>}
{activeComponent === 'sandwichPollo' && <SandwichDePollo />}
{activeComponent === 'sandwichPolloyPierna' && <SandwichpolloPierna />}
{activeComponent === 'postreHojas' && <PostreHojas />}
{activeComponent === 'piernaDeCerdo' && <PiernaCerdo />}
{activeComponent === 'bebidas' && <Bebidas />}
{activeComponent === 'batidos' && <Batidos />}





       
        </div>
  
        </div>


        <Footer/>

</section>
  
  
  
  
  </>

    )
}

export default Menu