import React, { useRef, Component } from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

const Home = () => {


  const footer = useRef()

  return (

    <>

      <section className="desktop w-100" >

        <div className="position-fixed z-4 w-100 ">
          <Navbar />
        </div>



        <div className="home ">

          <div className="opacity"></div>

        </div>

        <div className="welcome ">


          <div className="welcomeLetter ">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Bienvenido la cafeteria The Kath lugar que  necesitarás visitar. Brindamos a nuestros clientes variedades de comida . Desde la decoración hasta el servicio al cliente, pasando por las risas y alegrías compartidas entre amigos, The Kath reúne a todos para una experiencia completa y memorable.</p>


          </div>

          <div className="welcomeImage " >
            <div className="opacity"></div>

          </div>






        </div>

        <div className="menuOption">

          <div className="opacity "></div>


          <h3>Alta Calidad</h3>

          <h4>Opciones del Menu</h4>



        </div>

        <div className="menuSlide">


          <div className="menuSlideLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Nuestro menú fue diseñado cuidadosa y meticulosamente para garantizar que creamos impresiones duraderas mientras brindamos a los clientes una rica experiencia gastronómica. The Kath se enorgullece de sus empleados de nivel experto que preparan cuidadosamente cada plato.
            </p>


          </div>

          <div className="menuSlideImage p-3 ">


            <div className="  w-100 h-50 gap-2 d-flex justify-content-around align-items-center ">

              <div className="foodOne"></div>

              <div className=" foodTwo"></div>



            </div>


            <div className="  w-100 h-50 gap-2 d-flex justify-content-around align-items-center ">

              <div className="foodThree "></div>

              <div className=" foodFour"></div>



            </div>



          </div>






        </div>


        <div className="celebrate">

          <div className="opacity "></div>


          <h3>Ven</h3>

          <h4 className="">DISFRUTA CON NOSOTROS</h4>



        </div>



        <div className="celebrateSlide">


          <div className="celebrateLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>The Kath se enorgullece de brindar a los clientes un ambiente integral donde todos pueden reunirse para eventos. Celebra tu día con nosotros.
            </p>


          </div>

          <div className="celebrateImage rounded-3">

            <div className="opacity rounded-3"></div>


          </div>


          <div className="celebrateImagetwo">

            <div className="opacity rounded-3"></div>

          </div>





        </div>



        <div>
        </div>




      </section>






      {/* phone version */}

      <section className="phone w-100">


        <div className="position-fixed z-1 w-100 ">
          <Navbar />
        </div>


        <div className="homePhone ">

          <div className="opacity"></div>

        </div>


        <div className="welcomeResponsive ">


          <div className="welcomeLetter ">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Bienvenido la cafeteria The Kath lugar que  necesitarás visitar. Brindamos a nuestros clientes variedades de comida . Desde la decoración hasta el servicio al cliente, pasando por las risas y alegrías compartidas entre amigos, The Kath reúne a todos para una experiencia completa y memorable.</p>


          </div>







        </div>



        <div className="menuOptionPhone ">

          <div className="opacity "></div>


          <h3>Alta Calidad</h3>

          <h4>Opciones del Menu</h4>



        </div>


        <div className="menuSlidePhone">


          <div className="menuSlideLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Nuestro menú fue diseñado cuidadosa y meticulosamente para garantizar que creamos impresiones duraderas mientras brindamos a los clientes una rica experiencia gastronómica. The Kath se enorgullece de sus empleados de nivel experto que preparan cuidadosamente cada plato.
            </p>


          </div>

          <div className="menuSlideImage p-3 ">


            <div className="  w-100 h-50 gap-2 d-flex justify-content-around align-items-center ">

              <div className="foodOne"></div>

              <div className=" foodTwo"></div>



            </div>


            <div className="  w-100 h-50 gap-2 d-flex justify-content-around align-items-center ">

              <div className="foodThree "></div>

              <div className=" foodFour"></div>



            </div>



          </div>


        </div>




        <div className="celebratePhone">

          <div className="opacity "></div>

          <h4>DISFRUTA CON NOSOTROS</h4>

        </div>



        <div className="celebrateSlidePhone">


          <div className="celebrateLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>The Kath se enorgullece de brindar a los clientes un ambiente integral donde todos pueden reunirse para eventos. Celebra tu día con nosotros.
            </p>


          </div>

          <div className="celebrateImage rounded-3">

            <div className="opacity rounded-3"></div>


          </div>


          <div className="celebrateImagetwo">

            <div className="opacity rounded-3"></div>

          </div>





        </div>


      </section>

      <Footer/>

    </>




  )
}

export default Home