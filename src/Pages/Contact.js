import React from 'react'
import contact2 from '../images/contact2.jpg'
import contact4 from '../images/contact4.png'


function Contact() {
  return (
    <div className=' row p-5 m-5 align-items-center h-100'>
    <div className='col-4 '>
    <img className='mb-5' src={contact2} alt="" />
    <img className='mb-5' src={contact4} alt="" />
    
    </div>
     <div className='col-8'>
     <section id="contact">
    <div className="container-lg">
      
      <div className="">
        <h2 className='text-center me-5 pe-5'>Get in Touch</h2>
        <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
      </div>
      <div className="row my-4">
        <div className="col-lg-6">
          
          <form>
            <label for="email" className="form-label">Email address:</label>
            <div className="input-group mb-4"  style={{width: "35em"}}>
              <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
              </span>
              <input type="text" id="email" className="form-control" placeholder="e.g. dessfirid34@gmail.com" />
              <span className="input-group-text">
                <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>
            <label for="name" className="form-label">Name:</label>
            <div className="mb-4 input-group"  style={{width: "35em"}}>
              <span className="input-group-text">
                <i className="bi bi-person-fill text-secondary"></i>
              </span>
              <input type="text" id="name" className="form-control " placeholder="e.g. Desmond" />
            </div>           
            <div className="mb-4 input-group">
            </div>
            <p>Write your worries</p>
            
            <div className="mb-4 mt-3 form-floating">
              <textarea className="form-control  rounded-pill" id="query" style={{height: "140px", width: "35em"}} placeholder="query"></textarea>
              <label className='m-4' for="query">Your worries...</label>
            </div>
            <div className="mb-4 text-center ps-5 ms-5">
              <button type="submit" className="btn border border-2 rounded-pill " style={{backgroundColor:"rgb(119, 145, 161)"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
     </div>
     
    </div>
  )
}

export default Contact
