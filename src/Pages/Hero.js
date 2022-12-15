import "../App.css";
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import image1 from '../images/image1.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import secure7 from '../images/secure7.png'
import secure6 from '../images/secure6.png'
import secure3 from '../images/secure3.png'



function Hero() {
  return (
    <div>
    <div className='ms-4 mt-5 gap-5 h-75 ps-5'>
  <section id="intro">
      <div className ="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-5">Faculty of Engineering and Technology election ongoing</div>
            </h1>
            <p className="lead my-4 text-muted">Please be fair with your vote. This candidates will be the future of this department so endeavour to vote who you think is fit for this position</p>
            
            <a href="/votepage" className="btn border border-2 rounded-pill btn-lg" style={{backgroundColor:"rgb(119, 145, 161)"}}>Place Vote</a>
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <span className="dezy" data-bs-placement="bottom" title="Students enjoying the learning process" >
            <img src={image1} className="img-fluid border border-2 rounded-circle" alt="img" />
            </span>
          </div>
        </div>
      </div>
    </section>
    
    <section className="m-5 pt-3 px-3 mt-5" style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>
    <div class="row my-5 g-0 align-items-center justify-content-center" >
    <div className="text-center py-3 my-5 col-8 col-lg-4 col-xl-12">
    <h1 className="card-title" style={{color:"#f3aa92"}}>Our Features</h1>
    <p> Secure system that guarantee seamless election</p>
    </div>

    <div className="row">
    <div className=" col-8 col-lg-4 card-body text-center py-4">
    <img src={secure7} className='px-5 me-5 h-50 w-75' alt="secure" />
    <div>
    <h4 className=" card-title ps-4 pt-3 pb-1" style={{color:"#f3aa92"}}>Secured Platform</h4>
    <p className=" lead card-subtitle text-center ms-sm-5 me-5 pe-5" >With our platform, your data is safe</p>
    </div> 
    </div>
    
    <div className="col-8 col-lg-4  card-body text-center py-4">
    <img src={secure6} className='px-5 me-5 h-50 w-75' alt="secure" />
    <div>
    <h4 className="ps-5 ms-3 pt-3 pb-1 " style={{color:"#f3aa92"}}>Vote Online</h4>
    <p className=" lead card-subtitle text-center me-5 pe-5 ps-1" >With just a few clicks, you can vote your preferred candidates</p>
    </div>
    </div>
    
    <div className="col-8 col-lg-4 card-body text-center py-4 ">
    <img src={secure3} className='img-fluid px-5 me-5 h-50 w-75' alt="secure" />
    <div>
    <h4 className=" card-title ps-4 pt-3 pb-1" style={{color:"#f3aa92"}}>Real Time Results</h4>
    <p className=" lead card-subtitle text-center me-5 pe-5 " >view real time results, and scores <br /> for each candidates</p>
    </div>
    
    
    </div>
        
     </div>
     </div>
    </section>
                {/* Different positions  */}
    <section id="pricing" class="bg-light mt-5 pt-5">
      <div class="container-lg">
        <div class="text-center">
          <h2>Electoral positions </h2>
          <p class="lead text-muted">Find below are the different positions available to vote for</p>
        </div>
  
        <div class="row my-5 g-0 align-items-center justify-content-center">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-body text-center py-4">
                <h4 class="card-title">President</h4>
                <p class="lead card-subtitle">Who do you want to vote for as president</p>
            <img src={image3} className="img-fluid" alt="img" />
                <p class="card-text mx-5 text-muted d-none d-lg-block">Please click the details button to see a list of cadidates for this position and place your vote</p>
                <a href="/votepage" class="btn btn-outline-info border border-2 rounded-pill  btn-lg mt-3" style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>
                See Candidates
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-9 col-lg-4">
            <div class="card border-primary border-2">
              <div class="card-body text-center py-4">
                <h4 class="card-title">Secretary</h4>
                <p class="lead card-subtitle">Who do you want to vote for as Secretary</p>
            <img src={image4} className="img-fluid" alt="img" />
                <p class="card-text mx-5 text-muted d-none d-lg-block">Please click the details button to see a list of cadidates for this position and place your vote.</p>
                <a href="/votepage" class="btn btn-outline-info border border-2 rounded-pill btn-lg mt-3"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>
                  See Candidates
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-body text-center py-4">
                <h4 class="card-title"> Sport Cordinator</h4>
                <p class="lead card-subtitle">Who do you want to vote for as Sports Master</p>
                <p class="display-5 my-4 text-primary fw-bold">   <img src={image5} className="img-fluid" alt="img" /></p>
                <p class="card-text mx-5 text-muted d-none d-lg-block">Please click the details button to see a list of cadidates for this position and place your vote.</p>
                <a href="/votepage" class="btn btn-outline-info border border-2 rounded-pill btn-lg mt-3"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>
                See Candidates
                </a>
              </div>
            </div>
          </div>
   
        </div>
  
      </div>
      </section>  
    </div>
    </div>
    
  )
}

export default Hero