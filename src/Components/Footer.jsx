import React from 'react'

const Footer = () => {
  return (

    <footer className="container-fluid bg-dark p-3">
    
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

    <div className="col-4 d-flex justify-content-center align-items-center ">Km. 2 Autopista Duarte Pedro Brand, debajo del Puente.</div>

    <div className="col-4 d-flex mt-2 justify-content-center flex-column align-items-center gap-1"><p className="">Lunes a Viernes </p> 7:00 am a 9:30 pm - <p className="">Sabado </p> 9:00 am a 6:00 pm</div>

    <div className="col-4 d-flex justify-content-center align-items-center fs-2 ">829-480-2754 </div>


</div>





    <div className="row  d-flex p-2 w-100  ">
     
     <div className="deliverDiv">
       <span>Delivery disponible </span>  
         <div className="deliveryIcon">
         </div>
         </div>
</div>


<div className="row  d-flex justify-content-center align-items-center  fs-5 p-2 ">
© Website developed by Jonathan Webdesign </div>


</footer> 


)
}

export default Footer