import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import blog from '../images/blog-1.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Container from '../components/Container';

const SingleBlog = () => {
  return (
   <>
   <Meta title={"Dynamic blog name"}/>
    <BreadCrumb title="Dynamic blog name" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                <img src={blog} className="img-fluid my-4" alt="blog" />
                    <Link to="/blogs" 
                    className="d-flex align-items-center gap-10">
                        <AiOutlineArrowLeft className="fs-4"/>
                        Go back to Blogs
                        </Link>
                    <h3 className="title">
                    A Beautiful Sunday Morning Renaissance
                    </h3>
                    <p>
                    Lorem ipsum dolor sit
                     amet consetetur adipisicing elit.
                      Atque querant accusmus officia
                      Lorem ipsum dolor sit amet
                       consetetur adipisicing elit.
                        Atque querant accusmus officia
                        Lorem ipsum dolor sit
                        amet consetetur adipisicing elit.
                      Atque querant accusmus officia
                      Lorem ipsum dolor sit amet
                       consetetur adipisicing elit.
                        Atque querant accusmus officia
                        Lorem ipsum dolor sit
                     amet consetetur adipisicing elit.
                      Atque querant accusmus officia
                      Lorem ipsum dolor sit amet
                       consetetur adipisicing elit.
                        Atque querant accusmus officia.
                      </p>
                </div>
                </div>
            </div>
    </Container>

   </>
  )
}

export default SingleBlog
