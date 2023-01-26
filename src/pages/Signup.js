import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
    <Meta title={"Signup"}/>
    <BreadCrumb title="Signup" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
        <div className="col-12">
            <div className="Auth-card">
                <h3 className="text-center mb-3">Create Account</h3>

                <form className="d-flex flex-column gap-30" action="">
                <CustomInput type="text" name="name" placeholder="First name"/>
                <CustomInput type="text" name="name" placeholder="Last name"/>
                <CustomInput type="email" name="email" placeholder="Email"/>
                <CustomInput className="mt-1" type="password" name="password" placeholder="Password"/>
                

             
  
                

               
                <div>
                   <div className="d-flex justify-content-center mt-3 gap-15 align-items-center">
                    <button className="button border-0" to="/login">Create</button>
                    </div>
                     </div>
                 </form>
            </div>
            </div>
        </div>
        </Container>
    </>
  )
}

export default Signup
