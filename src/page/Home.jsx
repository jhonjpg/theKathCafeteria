import React, { useRef,Component } from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

const Home = () => {


  const footer = useRef()

  return (

    <>

      <section className="w-100" >

        <div className="position-fixed z-1 w-100 ">
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

        {/* phone version */}
        <div className="welcomeResponsive ">


<div className="welcomeLetter ">

  <h2>Cafeteria</h2>

  <h1>The kath</h1>

  <p>Bienvenido la cafeteria The Kath lugar que  necesitarás visitar. Brindamos a nuestros clientes variedades de comida . Desde la decoración hasta el servicio al cliente, pasando por las risas y alegrías compartidas entre amigos, The Kath reúne a todos para una experiencia completa y memorable.</p>


</div>

<div className="welcomeImage " >
<div className="opacity"></div>

</div>






      </div>



        <div className="menuOption ">

        <div className="opacity "></div>


          <h3>Alta Calidad</h3>

          <h4>Opciones del Menu</h4>



        </div>




        <div className="menuSlide">


          <div className="menuSlideLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil omnis, amet ullam, inventore consequuntur numquam sequi vel pariatur assumenda soluta corrupti consequatur facilis eum magni
              adipisci! Placeat, voluptas aliquam?</p>


          </div>

          <div className="menuSlideImage p-3 ">


          <div className="row p-3 w-100 h-50 d-flex justify-content-center gap-4">

              <div className="col-5  gap-1 foodOne"></div>

              <div className="col-5  gap-1 foodTwo"></div>



            </div>


            <div className="row p-3 w-100 h-50 d-flex justify-content-center gap-4">

              <div className="col-5 foodThree "></div>

              <div className="col-5 foodFour"></div>



            </div>



          </div>






        </div>




        <div className="celebrate">

        <div className="opacity "></div>


          <h3>Ven</h3>

          <h4>DISFRUTA CON NOSOTROS</h4>



        </div>



        <div className="celebrateSlide">


          <div className="celebrateLetter">

            <h2>Cafeteria</h2>

            <h1>The kath</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil omnis, amet ullam, inventore consequuntur numquam sequi vel pariatur assumenda soluta corrupti consequatur facilis eum magni
              adipisci! Placeat, voluptas aliquam?</p>


          </div>

          <div className="celebrateImage rounded-3">
            
          <div className="opacity rounded-3"></div>


          </div>


          <div className="celebrateImagetwo">

          <div className="opacity rounded-3"></div>

          </div>





        </div>

<div>

        <Footer />

</div>




      </section>

    </>




  )
}

export default Home