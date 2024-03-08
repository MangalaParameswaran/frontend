import V1 from '../../assets/V1.mp4'

const HomeBackV = () => {

  // let hotDeals=[
  //   {image:'https://static.vecteezy.com/system/resources/thumbnails/022/251/312/small_2x/illustration-of-leg-and-prosthesis-symbol-graphic-of-leg-and-amputation-ai-photo.jpg',
  //   text:'The function will terminate early,and the subsequent '
  
  // },
  //   {image:'https://c4.wallpaperflare.com/wallpaper/800/399/818/simple-background-robot-digital-art-artificial-intelligence-technology-hi-tech-wallpaper-preview.jpg',
  //   text:'The function will terminate early,and the subsequent '
  
  // },
  //   {image:'https://i.ytimg.com/vi/rBZKrpf3Y4U/maxresdefault.jpg',
  //   text:' If my leg falls off, I will get a prosthetic.'
  
  // },
  //   {image:'https://media.wired.com/photos/5a271d011a76b70919602351/master/w_1600%2Cc_limit/0118-WI-APPROS-04_sq.jpg',
  //   text:'Man has, as it were, become a kind of prosthetic God.'
  
  // },

  // ]
    // useEffect(()=>{
    //     AOS.init();
    //   })

  return <>
      <div className="container bg-video my-4">
  <div className="row">
    <div className="col-11 col-xl-7 col-lg-8 col-md-10 mx-auto">
      <video autoPlay muted loop id="myVideo" className='rounded-4' controls  src={V1} type="video/mp4" style={{borderRadius:'1em'}}>
      </video>      
    </div>
    <div className="col-11 col-xl-5 col-lg-8 col-md-10 mt-2 mx-auto">
      <div data-aos="flip-right">
      <h2 className="v-hd text-center mb" style={{fontStyle:'italic'}}>PROSTHETIC  <i className="fa-brands fa-wordpress-simple"></i>ORLD</h2>
      </div>
      <div data-aos="fade-down-left">
      <p className="text-dark my-4 fs-6 fw-bold  text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus reprehenderit laborum officia nemo est voluptas pariatur ea quam tempora laboriosam adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa ratione quidem veritatis itaque  similique dolor accusamus.</p>
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