import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { useState } from 'react';
import Color from '../components/Color';
import { IoIosGitCompare } from 'react-icons/io';
import { IoIosShuffle } from 'react-icons/io';
import { AiOutlineCopy } from 'react-icons/ai';
import Container from '../components/Container';



const SimpleProduct = () => {
  const props = {width: 300,  height: 600, zoomWidth: 600, img: "images/watch-1.jpg"};
const [orderedProduct, setorderedProduct ] = useState(true);

const [hasCopied, setHasCopied] = useState(false);
async function handleCopyClick() {
  try {
    await navigator.clipboard.writeText("images/watch-1.jpg");
    setHasCopied(true);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

  return (
    <>
     <Meta title={"Dynamic block name"}/>
    <BreadCrumb title="Dynamic block name" />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                      <div><ReactImageZoom {...props} /></div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-30">
                      <div><img src="images/watch-1.jpg" className="img-fluid" alt="watch"/></div>
                      <div><img src="images/watch-1.jpg" className="img-fluid" alt="watch"/></div>
                      <div><img src="images/watch-1.jpg" className="img-fluid" alt="watch"/></div>
                      <div><img src="images/watch-1.jpg" className="img-fluid" alt="watch"/></div>
                    </div>
                 </div>
                <div className="col-6">
                  <div className="main-product-details">
            <div className="border-bottom">
            <h3 className="title">
              Watches Bulk 10 Pack Multi Colored For Students
              </h3>
            </div>
            <div className="border-bottom py-3">
              <p className="price">$ 100.00</p>
              <div className="review-form d-flex align-items-center gap-10">
                  <ReactStars
                      count={5} 
                      size={24} 
                      value={4} 
                      edit={false} 
                      activeColor="#ffd700"/>
                      <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
            <a href="#review" className="review-btn noline">Write a Review</a>
            </div>
            <div className="border-bottom py-3">
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Type:</h3>
                <p className="product-data">Headsets</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Brand:</h3>
                <p className="product-data">Havels</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Categories:</h3>
                <p className="product-data">
                  airpods, cameras, Computers & Laptops, mini speacker, our store</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Tags:</h3>
                <p className="product-data">oppo speacker IPhones</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Availability:</h3>
                <p className="product-data">In Stock</p>
              </div>
              <div className="d-flex gap-10 d-flex-column my-2">
                <h3 className="product-heading">Size :</h3>
                <div className="d-flex flex-wrap gap-15">
                  <span className="badge border text-black">S</span>
                  <span className="badge border text-black">M</span>
                  <span className="badge border text-black">XL</span>
                  <span className="badge border text-black">XXL</span>
                </div>
              </div>
              <div className="d-flex gap-10 align-items-center ">
                <h3 className="product-heading">Color :</h3>
               <div className="mt-2"><Color /></div>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Quantity:</h3>
                <input type="number" className="form-control" name="" min={1} max={10} 
                    style={{ width: "70px"}} id=""/>
                    <div className="d-flex align-items-center gap-30 ms-5">
                     <button className="button border-0" type="submit">Add To Cart</button>
                    <button className="button border-0" to="/">Buy it Now</button>
                    </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <div>
                  <a href=""><IoIosGitCompare className="fs-5 me-2"/>Add to Compare</a>
                </div>
                <div>
                  <a href=""><IoIosShuffle className="fs-5 me-2"/>Add to wishlist</a>
                </div>
              </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Shipping & Returns :</h3>
                <p className="product-data">Free shipping and returns available on all orders!
                 all US domestic orders within <br/><b>5-10 bussiness days!</b>
                </p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <p className="me-3 mb-0">Copy Product Link</p>
                <button onClick={handleCopyClick} disabled={hasCopied} className="border-0 bg-white">
                <AiOutlineCopy className=""/>
              </button>
                </div>
                </div>
              </div>
            </div>
      </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                
                  <p>
                  Lorem ipsum dolor sit
                     amet consetetur adipisicing elit.
                      Atque querant accusmus officia
                      Lorem ipsum dolor sit amet
                       consetetur adipisicing elit.
                        Atque querant accusmus officia
                        Lorem ipsum dolor sit
                        amet consetetur adipisicing elit.
                  </p>
                </div>
                </div>
        </div>
    </Container>
    <Container class1="reviews-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                <h3 className="mb-2">Customer Views</h3>
                   <div className="d-flex align-items-center gap-10">
                     <ReactStars
                      count={5} 
                      size={24} 
                      value="4" 
                      edit={false} 
                      activeColor="#ffd700"/>
                      <p className="mb-0">Based on 2 Reviews</p>
                   </div>
                </div>
                {orderedProduct && (
                    <div>
                        <a  id="review" href="" className="text-dark">Write a Review</a>
                    </div>
                )}
                    </div>    
                    <div className="review-form py-4">
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
                    <h4>Write a review</h4>
                  <ReactStars
                      count={5} 
                      size={24} 
                      value="4" 
                      edit={true} 
                      activeColor="#ffd700"/>
                  </div>
                  <div>
                    <textarea 
                    type="text" cols="30" rows="4" 
                    className="form-control w-100"
                     placeholder="Comments">
                      </textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                  <button className="button border-0">Submit Review</button>
                  </div>
                </form>
                        </div> 
                        <div className="reviews mt-4">
                            <div className="review">
                              <div className="d-flex gap-10 align-items-center">
                                <h6 className="mb-0">J A W A D</h6>
                      <ReactStars
                      count={5} 
                      size={24} 
                      value="4" 
                      edit={false} 
                      activeColor="#ffd700"/>
                              </div>
                       
                      <p className="mt-3">
                      Lorem ipsum dolor sit
                     amet consetetur adipisicing elit.
                      Atque querant accusmus officia
                      Lorem ipsum dolor sit amet
                       consetetur adipisicing elit.
                        Atque querant accusmus officia
                        Lorem ipsum dolor sit
                        amet consetetur adipisicing elit.
                      </p>
                            </div>

                        </div>
                </div>
                </div>
               
        </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>
    
         <ProductCard />
        <ProductCard />
        <ProductCard />
       <ProductCard />
       </div>
 
  </Container>
    </>
  )
}

export default SimpleProduct
