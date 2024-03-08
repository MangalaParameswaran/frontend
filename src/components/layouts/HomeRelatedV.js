import React from 'react'
import V2 from '../../assets/V2.mp4'
import V3 from '../../assets/V3.mp4'
import V4 from '../../assets/V4.mp4'
import V5 from '../../assets/V5.mp4'
import V6 from '../../assets/V6.mp4'
import V1 from '../../assets/V1.mp4'



const HomeRelatedV = () => {
  return <>
  <div className="container-fluid my-5" id="video">
  {/* <div className="line1 text-dark"></div>
<div className="line2 text-dark"></div>  */}
  <h1 className="text-center my-3 text-dark fw-bolder p-4 mb" style={{fontStyle:'italic',backgroundColor:'rgb(226,229,229)'}}  >Related Videos &nbsp; <i className="fa-solid fa-video"></i></h1>
  <div className="row mx-1" height="600">
    <div className="col-sm-9 col-lg-5 col-xl-3 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-light-subtle shadow rounded-3 mb-4">
        <video autoPlay muted loop id="myVideo" controls width="560" height="600" src={V2} type="video/mp4">
        </video>
    </div>
    <div className="col-9 col-lg-5 col-xl-6 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
      <video autoPlay muted loop id="myVideo" controls width="560" height="300" src={V3} type="video/mp4">
      </video>
    </div>
    <div className="col-9 col-lg-5 col-xl-3 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-light-subtle shadow rounded-3 my-4">
      <video autoPlay muted loop id="myVideo" controls width="560" height="300" src={V4} type="video/mp4">
      </video>
    </div>
    <div className="row mx-1 related-v">
      <div className="col-sm-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src={V5} type="video/mp4" controls width="560" height="300">
        </video>
      </div>
    
      <div className="col-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src={V6} type="video/mp4" controls width="560" height="300">
        </video>
      </div>
      <div className="col-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src={V1} type="video/mp4" controls width="560" height="300">
        </video>
      </div>
  </div>
</div>
</div>
  </>
}

export default HomeRelatedV