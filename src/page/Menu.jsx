import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { NavMenu } from '../Components/menuComponents/NavMenu';
import { SandwichJamo } from '../Components/menuComponents/SandwichJamo';
import { SandwichJamonyqueso } from '../Components/menuComponents/SandwichJamonyqueso';
import { Derretidos } from '../Components/menuComponents/Derretidos';
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

      <div className="position-fixed  w-100 z-5 text-white ">
        <Navbar />
      </div>

      <section className=" d-flex justify-content-center flex-column w-100" >




        <div className="menu">

          <p className="position-absolute">Menu</p>

          <div className="opacity"></div>
        </div>


        {/* menu in desktop */}

        <div id="menuPage" className="d-flex justify-content-center align-items-center flex-column gap-5 w-100  p-5">

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
            {activeComponent === 'derretidos' && <Derretidos />}
            {activeComponent === 'sandwichPollo' && <SandwichDePollo />}
            {activeComponent === 'sandwichPolloyPierna' && <SandwichpolloPierna />}
            {activeComponent === 'postreHojas' && <PostreHojas />}
            {activeComponent === 'piernaDeCerdo' && <PiernaCerdo />}
            {activeComponent === 'bebidas' && <Bebidas />}
            {activeComponent === 'batidos' && <Batidos />}






          </div>

        </div>



        {/* menu on phone */}
        <div className="responsiveSelectorMenu">

          <ul className='menuNav'>

            <li className="bg-dark text-white" onClick={() => handleComponentClick('menu')}>Menu</li>
            {activeComponent === 'menu' && <NavMenu />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('sandwichJamon')}>Sandwich de jamon</li>
            {activeComponent === 'sandwichJamon' && <SandwichJamo />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('sandwichJamonyqueso')}>Sandwich de jamon y queso</li>
            {activeComponent === 'sandwichJamonyqueso' && <SandwichJamonyqueso />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('derretidos')}>Derretidos</li>
            {activeComponent === 'derretidos' && <Derretidos />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('sandwichPollo')}>Sandwich de pollo</li>
            {activeComponent === 'sandwichPollo' && <SandwichDePollo />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('sandwichPolloyPierna')}>Sandwich de pollo y pierna</li>
            {activeComponent === 'sandwichPolloyPierna' && <SandwichpolloPierna />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('postreHojas')}>Postre de hojas</li>
            {activeComponent === 'postreHojas' && <PostreHojas />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('piernaDeCerdo')}>Pierna de cerdo</li>
            {activeComponent === 'piernaDeCerdo' && <PiernaCerdo />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('bebidas')}>Bebidas</li>
            {activeComponent === 'bebidas' && <Bebidas />}

            <li className="bg-dark text-white" onClick={() => handleComponentClick('batidos')}>Batidos</li>
            {activeComponent === 'batidos' && <Batidos />}




          </ul>

          <hr className="OpcionesDeMenu" />











        </div>








        {/* <Footer /> */}
        <Footer/>


      </section>




    </>

  )
}

export default Menu