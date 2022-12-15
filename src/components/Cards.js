import React from 'react'
import image1 from '../images/image1.jpg'
import contact4 from '../images/contact4.png'
import contact1 from '../images/contact1.jpg'
import contact3 from '../images/contact3.png'

function Cards() {
  return (
    <div>
    <h3 className='text-center '>Staff Members</h3>
    <div className=' row m-5 my-5 g-0 align-items-center justify-content-center'>
    <div className="card" style={{width: "13rem", height:"30rem"}}>
  <img src= {contact4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title mb-4 ">Bermond Yange. <span className='text-success'> <br /> P/F</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info border border-2 mt-4 rounded-pill"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>More details</a>
  </div>
</div>
 <div className="card" style={{width: "13rem", height:"30rem"}}>
  <img src= {contact3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Ayuk Etta. <span className='text-success'><br /> P/F</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info border border-2 rounded-pill"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>More details</a>
  </div>
</div>
 <div className="card" style={{width: "13rem", height:"30rem"}}>
  <img src= {contact4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title mb-4">Amin Jefferson <span className='text-success'>GM</span> </h5>
    <p className="card-text">The General Manager of Wuna University.</p>
    <a href="#s" className="btn btn-info border mt-5 mb-3 border-2 rounded-pill"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>More details</a>
  </div>
</div>
 <div className="card" style={{width: "13rem", height:"30rem"}}>
  <img src= {contact3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Tim Merciful. <span className='text-success'> <br /> OM</span> </h5>
    <p className="card-text">The Operational Manager of Wuna University.</p>
    <a href="#s" className="btn btn-info border border-2 rounded-pill"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>More details</a>
  </div>
</div>
<div className="card" style={{width: "13rem", height:"30rem"}}>
  <img src= {contact4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Bill Elton. <span className='text-success'> <br /> D</span> </h5>
    <p className="card-text mb-4">UX/UI Designer of Wuna University.</p>
    <a href="#s" className="btn btn-info border mt-5 border-2 rounded-pill"  style={{backgroundColor:"rgb(119, 145, 161)", color:"white"}}>More details</a>
  </div>
</div>
    </div>
   
    </div>
    
  )
}

export default Cards