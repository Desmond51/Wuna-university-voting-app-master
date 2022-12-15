import React from 'react'
import AboutUs from '../css/AboutUs.css'
import look1 from '../images/look1.jpg'
import look3 from '../images/look3.jpg'
import look2 from '../images/look2.jpg'
import Footer from '../components/Footer'

function About() {
  return (   
    <div>
    <div className="about-section my-5">
  <h1>About Us Page</h1>
  <div className='text-align-center p-5 mx-5'>
    <h2> Our priority is to make a School elections simpler, easy and fair.</h2>
    <p>This voting system was made to improve the voting system of Wuna University. <br />
     Electing student representatives has been made easy on this app. With just few clicks, voters are able to vote their preferred candidates</p>
    </div>

</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row m-5">
  <div className="column">
    <div className="card">
      <img src={look2} alt="Jane" className='rounded-circle' style={{width:"100%"}} />
      <div className="container" style={{textAlign:"center"}}>
        <h2 style={{backgroundColor:"rgb(119, 145, 161)", color:"#f3aa92"}}>Bermond Yange</h2>
        <p className="title">CEO & Founder</p>
        <p><b>A world without security must be doomed</b></p>
        <p>Yange.bermond@iknite.studio</p>
        <p><button className="btn btn-outline-info border border-2 rounded-circle ms-4 btn-md mt-3"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}} >Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={look3} alt="Mike" className='rounded-circle' style={{width:"100%"}} />
      <div className="container" style={{textAlign:"center"}}>
        <h2 style={{backgroundColor:"rgb(119, 145, 161)", color:"#f3aa92"}}>Amin Jefferson</h2>
        <p class="title">General manager/ Designer</p>
        <p><b>Decipline leads to success so it comes first</b></p>
        <p>amin@iknite.studio</p>
        <p><button className="btn btn-outline-info border border-2 rounded-circle ms-4 btn-md mt-3"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}} >Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src= {look1} alt="John" className='rounded-circle' style={{width:"100%"}} />
      <div className="container" style={{textAlign:"center"}}> 
        <h2 style={{backgroundColor:"rgb(119, 145, 161)", color:"#f3aa92"}}>Tim Merciful</h2>
        <p className="title"> Operations Officer/ Content Writer </p>
        <p><b>A true leader listens, respect and appreciate others</b> </p>
        <p>timmerciful@gmail.com</p>
        <p><button className="btn btn-outline-info border border-2 rounded-circle ms-4 btn-md mt-3"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}} >Contact</button></p>
      </div>
    </div>
  </div>
</div>

<Footer />
   
    </div>
    
    
  )
}

export default About