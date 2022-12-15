import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox,} from 'cdbreact';
// import wunalogo from '../images/wunalogo.png'

export default function Footer ()  {
  return (
    <CDBFooter className="shadow fs-6 fw-lighter ">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-muted">
              {/* <img alt="logo" src={wunalogo} width="30px" /> */}
              <span className="ms-3 h5 font-weight-bold text-decoration-none" style={{ fontWeight: '600', color:"#f3aa92" }}>Wuna University</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We  give High Quality training to make our students stand out amongst other students from other university. 
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#f3aa92" }}>
              Insight
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0', fontSize:"2px" }}>
              <CDBFooterLink className='text-reset' href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#f3aa92"  }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600',color:"#f3aa92" }}>
              Others
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink className='text-decoration-none' href="/">Our successful Students</CDBFooterLink>
              <CDBFooterLink href="/">Terms and Conditions</CDBFooterLink>
              <CDBFooterLink href="/">Private Policy</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5" style={{ color:"#f3aa92"}}>&copy; Wuna University, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};