import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome } from 'react-icons/ai';
import { BiPhoneCall} from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';

const Contact  = () => {
  return (
  <>
  <Meta title={"Contact Us"} />
  <BreadCrumb title="Contact Us" />
  <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
          <iframe title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62855.39840871378!2d-2.5441288220956086!3d10.061145609099194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcd7cd8a11667df%3A0x7011cb72ef706fdc!2sWa!5e0!3m2!1sen!2sgh!4v1674425136654!5m2!1sen!2sgh"
           width="600"
            height="450" 
            className="border-0 w-100"
             allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade">
         </iframe>
          </div>
          <div className="col-12 mt-5">
             <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Mobile Number"/>
                  </div>
                  <div>
                    <textarea 
                    type="text" cols="30" rows="4" 
                    className="form-control w-100"
                     placeholder="Comments">
                      </textarea>
                  </div>
                  <div>
                  <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with Us</h3>
              
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className="fs-5"/> 
                <address className="mb-0"> Hno: 908, Near Spicy, Wa, Upper West, Ghana</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-5"/>
                  <a href="tel:+233 54 740 3691">+233 (0)54 740 3691</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail className="fs-5"/>
                  <a href="mailto:janerallegend@gmail.com">janerallegend@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiInfoCircle className="fs-5"/>
                  <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
              </div>
             </div>
          </div>
      </div>
  </Container>
  </>
  );
}
export default Contact 
