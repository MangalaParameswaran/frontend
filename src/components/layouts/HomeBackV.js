import V1 from '../../assets/V1.mp4'

const HomeBackV = () => {

  return <>
      <div className="container bg-video my-4">
  <div className="row">
    <div className="col-11 col-xl-7 col-lg-8 col-md-10 mx-auto">
      {/* <video autoPlay muted loop id="myVideo" className='rounded-4' controls  src={V1} type="video/mp4" style={{borderRadius:'5em'}}>
      </video>       */}
      <img src='https://t4.ftcdn.net/jpg/02/71/72/61/360_F_271726138_2D8Me6YjSDMaGYFNAi94zlaXMqTGZd1R.jpg' style={{height:"", width:"100%",borderRadius:"2em"}}/>
    </div>
    <div className="col-11 col-xl-5 col-lg-8 col-md-10 mt-2 mx-auto">
      <div data-aos="flip-right">
      <h2 className="v-hd text-center mb" style={{fontStyle:'italic'}}>PROSTHETIC  <i className="fa-brands fa-wordpress-simple"></i>ORLD</h2>
      </div>
      <div data-aos="fade-down-left">
      <p className="text-dark my-4 fs-6 fw-bold  text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus reprehenderit laborum officia nemo est voluptas pariatur ea quam tempora laboriosam adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="row text-dark my-4">
        <div className="col">
          <div data-aos="flip-right">
          <h3 className="v-hd text-center mb" style={{fontStyle:'italic'}}>Lowest Price Best Quality &nbsp; <i class="fa-solid fa-cart-shopping"></i></h3>
          </div>
        </div>
       </div>
       <div className="row d-flex justify-content-center">
        <div className="col-4 my-2">
          <div className="row">
            <div className="col-3"><i className="fa-solid fa-truck  text-danger"></i></div>
            <div className="col-9 text-dark">Free Delivery</div>
          </div>
        </div>
        <div className="col-4 my-2">
          <div className="row">
            <div className="col-3"><i className="fa-solid fa-money-check-dollar  text-danger"></i></div>
            <div className="col-9 text-dark">Cash On Delivery available</div>
          </div>
        </div>
        <div className="col-4 my-2">
            <div className="row">
              <div className="col-3"><i className="fa-solid fa-person-walking-arrow-loop-left text-danger"></i></div>
              <div className="col-9 text-dark">Easy Return</div>
            </div>
        </div>
        </div>
        </div>
       </div>
</div>
    </>
}

export default HomeBackV