import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ResetPassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"}/>
    <BreadCrumb title="Forgot Password" />
    <Container class1="forgotPassword-wrapper py-5 home-wrapper-2">
        <div className="row">
        <div className="col-12">
            <div className="Auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <form className="d-flex flex-column gap-30" action="">
                  <CustomInput type="password" name="password" placeholder="Password"/>
                  <CustomInput  type="password" name="confpassword" placeholder="Confirm Password"/>
               
                   <div className="d-flex justify-content-center flex-column mt-3 gap-15 align-items-center">
                    <button className="button border-0" type="submit">Reset</button>
                    <Link to="/login" className="noline">Cancel</Link>
                     </div>
                     
                </form>
            </div>
            </div>
        </div>
        </Container>
    </>
  );
}

export default ResetPassword

