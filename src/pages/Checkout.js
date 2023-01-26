import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import watch1 from '../images/watch-1.jpg';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
  
  <Container class1="checkout-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-Name">Logic Gate</h3>
                    <div className="">
                    <nav 
                    style={{"--bs-breadcrumb-divider": ">"}}
                    aria-label="breadcrumb">
                       <ol className="breadcrumb fs-6 align-items-center">
                    <li className="breadcrumb-item">
                        <Link className="noline cartel" to="/cart">Cart</Link>
                        </li>
                        <svg stroke="currentColor" fill="currentColor" 
                         stroke-width="0" viewBox="0 0 24 24" height="12px" 
                          width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z">
                         </path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z">
                            </path>
                              </svg>
                    <li className="breadcrumb-item active" aria-current="page">
                        Information
                        </li>
                        <svg stroke="currentColor" fill="currentColor" 
                         stroke-width="0" viewBox="0 0 24 24" height="12px" 
                          width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z">
                         </path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z">
                            </path>
                              </svg>
                        <li className="breadcrumb-item active" aria-current="page">
                         Shipping
                        </li>
                        <svg stroke="currentColor" fill="currentColor" 
                         stroke-width="0" viewBox="0 0 24 24" height="12px" 
                          width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z">
                         </path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z">
                            </path>
                              </svg>
                        <li className="breadcrumb-item active" aria-current="page">
                         Payment
                        </li>
                       </ol>
                        </nav>
                        </div>

                      <h4 className="title total">Contact Information</h4>
                      <p className="user-details total">
                        Jawad Asmawu (hajiaasmaw@gmail.com)
                      </p>
                      <h4 className="mb-3">
                        Shipping Address
                      </h4>
                      <form action="" className="d-flex gap-15 flex-wrap justify-content-between" >
                       <div className="w-100">
                        <select className="form-control form-select" id="">
                         <option selected disabled>Select Country</option>
                        </select>
                       </div>
                       <div className="flex-grow-1">
                        <input type="name" placeholder="First Name" className="form-control"/>
                        </div>
                        <div className="flex-grow-1">
                        <input type="name" placeholder="Last Name" className="form-control"/>
                        </div>
                        <div className="w-100">
                        <input type="address" placeholder="Address" className="form-control"/>
                        </div>
                        <div className="w-100">
                        <input type="address" placeholder="Apartment, Suite, etc" className="form-control"/>
                        </div>
                       <div className="flex-grow-1">
                        <input type="text" placeholder="City" className="form-control"/>
                       </div>
                       <div className="flex-grow-1">
                       <select className="form-control form-select" id="">
                        <option selected disabled>Select State</option>
                       </select>
                       </div>
                       <div className="flex-grow-1">
                       <input type="text" placeholder="Zipcode" className="form-control"/>
                       </div>
                       <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/cart" className="text-dark noline">
                                <AiOutlineArrowLeft className="me-2"/>
                                Return to Cart</Link>
                            <Link to="/cart" className="button bg-danger">
                                Continue to Shipping</Link>
                        </div>
                       </div>
                       
                      </form>
                </div>
            </div>
      
        
        <div className="col-5">
           <div className="border-bottom py-4">
           <div className="d-flex gap-10 align-items-center">

           <div className="w-75 d-flex gap-10">
           <div className="w-25 position-relative">
            <span style={{top: "-18px", right: "-2px"}}
             className="badge bg-secondary text-white rounded-circle  position-absolute">1</span>
              <img src={watch1} className="img-fluid watch-2" alt="watch1" />
              </div>
              <div>
              <h5 className="total-price">Apple 7+ watch i8zh</h5>
              <p className="total-price">Apple was the best selling product on the markert with less shipping fees</p>
              <p  className="total-price">S / #ATSS453</p>
              </div>
            <div className="flex-grow-1">
              <h5>$100</h5>
              
              </div>
           </div>
           </div>
           </div>
           <div className="border-bottom py-4">
           <div className="d-flex justify-content-between align-items-center">
               <p className="total">Subtotal</p>
               <p className="total-price">$ 10000.00</p>
           </div>
           <div className="d-flex justify-content-between align-items-center">
               <p className="mb-0 total">Shipping</p>
               <p className="mb-0 total-price">$ 10000.00</p>
           </div>
           </div>
           <div className="d-flex justify-content-between align-items-center border-bottom py-4">
           <h4 className="total">Total</h4>
            <h5 className="total-price">$ 10000.00</h5>
           </div>
        </div>
    </div>
</Container>

 

    </>
  )
}

export default Checkout
