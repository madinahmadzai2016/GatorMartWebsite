import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';

export default function footer() {
  return (
    <MDBFooter  color ='light' bgColor='dark'className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
                © 2022 Gatormart
              </h6>
              <p>
                Gatormart is the perfect marketplace for SFSU students. Something you want to sell ? We got you!! Or maybe you need to buy some new items? Leverage the Gatormart platform.  Don't want to meet at shady places? Make sure all your pickups are on campus!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Team</h6>
              <p>
                <a href='/lakshay' className='text-reset'>
                 Lakshay
                </a>
              </p>
              <p>
                <a href='/sanjana' className='text-reset'>
                 Sanjana
                </a>
              </p>
              <p>
                <a href='/arjun' className='text-reset'>
                Arjun
                </a>
              </p>
              <p>
                <a href='/zahid' className='text-reset'>
                 Zayed
                </a>
              </p>
              <p>
                <a href='/sanket' className='text-reset'>
                 Sanket
                </a>
              </p>
              <p>
                <a href='/madina' className='text-reset'>
                 Madina
                </a>
              </p>
              <p>
                <a href='/dinesh' className='text-reset'>
                Dinesh
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contribute</h6>
              <p>
              <MDBBtn outline style ={{borderRadius:'50%'}}tag='a' color="light" floating className='m-1' href='https://github.com/CSC-648-SFSU/csc648-fall22-01-Team03' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
              </p>
             
              
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='light' icon='home' className='me-2' />
                1600 Holloway Avenue, <span >SF</span>
              </p>
              <p>
                <MDBIcon color='light' icon='envelope' className='me-2' />
                contact@gatormart.tech
              </p>
              <p>
                <MDBIcon color='light' icon='phone' className='me-2' /> +1 415/338-2234
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Made with &lt;3 by Team 3
       
      </div>
    </MDBFooter>
  );
}