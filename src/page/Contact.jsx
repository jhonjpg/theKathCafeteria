import React from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

const Contact = () => {
  return (


    <>


      <section className="w-100 overflow-hidden" >

        <div className="position-fixed z-1 w-100 ">
          <Navbar />
        </div>

        
        <div className="contact ">

          <p className="position-absolute">Contactanos</p>
        </div>

     

        <div className="ContactInfo ">



          <div className=" p-3">

            <div className="row  d-flex  justify-content-center align-items-center">

              <div className="col-4  d-flex justify-content-center align-items-center">
                <strong className="fs-3">Visitanos</strong>
              </div>

              <div className="col-4  d-flex flex-column justify-content-center align-items-center gap-2">

                <strong className="fs-3"> Horarios</strong>

              </div>


              <div className="col-4 d-flex justify-content-center align-items-center"><strong className="fs-3"> Contactanos</strong></div>
            </div>
            <div className="row  d-flex justify-content-center  align-items-center  ">

              <div className="col-4 text-black-50 d-flex justify-content-center align-items-center ">Km. 2 Autopista Duarte Pedro Brand, debajo del Puente.</div>

              <div className="col-4  text-black-50 d-flex mt-2 justify-content-center flex-column align-items-center gap-1"><p className="fs-5">Lunes a Viernes </p> 7:00 am a 9:30 pm - <p className="fs-5">Sabado </p> 9:00 am a 6:00 pm</div>

              <div className="col-4  text-black-50 d-flex justify-content-center align-items-center fs-3 ">829-480-2754 </div>


            </div>


          </div>



          <div className=" p-3">

            <div className="row  d-flex  justify-content-center align-items-center">

              <div className="col-6  d-flex justify-content-center align-items-center">
                <strong className="">Siguenos</strong>
              </div>



              <div className="col-6 d-flex justify-content-center align-items-center"><strong> Localizanos</strong></div>


            </div>



            <div className="row  d-flex justify-content-center  align-items-center  ">

              <div className="col-6 d-flex justify-content-center align-items-center ">Instagram</div>


              <div className="col-6 d-flex justify-content-center align-items-center "> <a className="map" href="https://www.google.com/maps/place/Autop.+Juan+Pablo+Duarte+2,+Pedro+Brand/@18.5660261,-70.0854037,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaff49c890b4d5d:0x8e530eb2bc56c18a!8m2!3d18.5660261!4d-70.083215"></a>  </div>


            </div>




          </div>
        </div>


        <div className="ContactInfoPhone ">



          <div className=" p-3">

            <div className="row  d-flex  justify-content-center align-items-center">



              <div className="col-6  d-flex flex-column justify-content-center align-items-center gap-2">

                <strong className="fs-3"> Horarios</strong>

              </div>


              <div className="col-6 d-flex justify-content-center align-items-center"><strong className="fs-3"> Contactanos</strong></div>
            </div>

            <div className="row  d-flex justify-content-center  align-items-center  ">

              <div className="col-6  text-black-50 d-flex mt-2 justify-content-center flex-column align-items-center gap-1"><p className="fs-5">Lunes a Viernes </p> 7:00 am a 9:30 pm - <p className="fs-5">Sabado </p> 9:00 am a 6:00 pm</div>

              <div className="col-6  text-black-50 d-flex justify-content-center align-items-center fs-3 ">829-480-2754 </div>


            </div>


          </div>



          <div className=" p-3">

            <div className="row  d-flex  justify-content-center align-items-center">

              <div className="col-6  d-flex justify-content-center align-items-center">
                <strong className="">Siguenos</strong>
              </div>



              <div className="col-6 d-flex justify-content-center align-items-center"><strong> Localizanos</strong></div>


            </div>



            <div className="row  d-flex justify-content-center  align-items-center  ">

              <div className="col-6 d-flex justify-content-center align-items-center ">Instagram</div>


              <div className="col-6 d-flex justify-content-center align-items-center "> <a className="map" href="https://www.google.com/maps/place/Autop.+Juan+Pablo+Duarte+2,+Pedro+Brand/@18.5660261,-70.0854037,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaff49c890b4d5d:0x8e530eb2bc56c18a!8m2!3d18.5660261!4d-70.083215"></a>  </div>


            </div>




          </div>
        </div>



        <Footer />

      </section>




    </>

  )
}

export default Contact