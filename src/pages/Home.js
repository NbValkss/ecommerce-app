import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import Container from '../components/Container';
import { services } from '../Data';
const Home = () => {
  return (
  <>
  <Container class1="home-wrapper-1 py-5">
  <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative">
            <img src="images/main-banner-1.jpg" 
            className="img-fluid rounded-3" 
            alt="main banner"/>
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>IPad S13+ Pro.</h5>
              <p>From $999.00 <br/>or $41.62.</p>
              <Link className="button" value="BUY NOW">BUY NOW</Link>
            </div>
          </div>
           </div>
        <div className="col-6">
          <div className="d-flex flex-wrap  gap-10 justify-content-between align-items-center">
        <div className="small-banner position-relative">
            <img src="images/catbanner-01.jpg" 
            className="img-fluid rounded-3" 
            alt="main banner"/>
            <div className="small-banner-content position-absolute">
              <h4>BEST SAKE</h4>
              <h5>IPadS13+Pro</h5>
              <p>From $999.00 <br/>or $41.62.</p>
             
            </div>
            </div>
          
          
        <div className="small-banner position-relative">
            <img src="images/catbanner-02.jpg" 
            className="img-fluid rounded-3" 
            alt="main banner"/>
            <div className="small-banner-content position-absolute">
              <h4>NEW ARRIVAL</h4>
              <h5>Buy IPad Air</h5>
              <p>From $999.00 <br/>or $41.62.</p>
             
            
            </div>
          </div>
          
        <div className="small-banner position-relative">
            <img src="images/catbanner-03.jpg" 
            className="img-fluid rounded-3" 
            alt="main banner"/>
            <div className="small-banner-content position-absolute">
              <h4>15% OFF</h4>
              <h5>Smartwatch7</h5>
              <p>shop the latest band <br/> styles and colors</p>
             
           
            </div>
          </div>
          
        <div className="small-banner position-relative">
            <img src="images/catbanner-04.jpg" 
            className="img-fluid rounded-3" 
            alt="main banner"/>
            <div className="small-banner-content position-absolute">
              <h4>FREE ENGRAVING</h4>
              <h5>AirPods Max</h5>
              <p>High fedelity playback &
                <br/>ultra-low distortion
              </p>
          
             
           </div>
           </div>
          </div>
         </div>
       </div>
  </Container>

<Container class1="home-wrapper-2 py-5">
<div className="row">
        <div className="col-12">
          <div className="service d-flex align-items-center justify-content-between">
           
          {
            services?.map((i,j) => {
              return (
                
              <div className="d-flex align-items-center gap-15" key={j}>
              <img src={i.image} alt="services"/>
              <div>
              <h6>{i.tagline}</h6>
              <p className="mb-0">{i.tagline}</p>
              </div>
              </div>
               
              );
            })
          };
      


            </div>
        </div>
      </div>
</Container>

<Container class1="home-wrapper-2 py-5">
<div className="row">
        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
         <div className="d-flex gap align-items-center">
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src="images/camera.jpg" alt="Camera"/>
         </div>

         <div className="d-flex gap align-items-center">
          <div>
            <h6>Music & Gaming</h6>
            <p>10 Items</p>
          </div>
          <img src="images/headphone.jpg" alt="Camera"/>
         </div>
         <div className="d-flex gap align-items-center">
          <div>
            <h6>Smart Tv</h6>
            <p>10 Items</p>
          </div>
          <img src="images/tv.jpg" alt="Camera"/>
         </div>
         <div className="d-flex gap align-items-center">
          <div>
            <h6>Smart watches</h6>
            <p>10 Items</p>
          </div>
          <img src="images/camera.jpg" alt="Watch"/>
         </div>

         <div className="d-flex gap align-items-center">
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src="images/camera.jpg" alt="Camera"/>
         </div>

         <div className="d-flex gap align-items-center">
          <div>
            <h6>Music & Gaming</h6>
            <p>10 Items</p>
          </div>
          <img src="images/headphone.jpg" alt="Camera"/>
         </div>
         <div className="d-flex gap align-items-center">
          <div>
            <h6>Smart Tv</h6>
            <p>10 Items</p>
          </div>
          <img src="images/tv.jpg" alt="Camera"/>
         </div>
         <div className="d-flex gap align-items-center">
          <div>
            <h6>Smart watches</h6>
            <p>10 Items</p>
          </div>
          <img src="images/camera.jpg" alt="Watch"/>
         </div>
        </div>


      </div>
</Container>

<Container class1="featured-wrapper py-5 home-wrapper-2">
<div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collection</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
       <ProductCard />
      
      </div>
</Container>
 
 <Container class1="famous-wrapper py-5 home-wrapper-2">
 <div className="row">
        <div className="col-3">
          <div className="famous-card position-relative">
            <img  src="images/famous0.png" alt="phone" className="phone-watch img-fluid"/>
            <div className="famous-content position-absolute">
            <h5>Big Screen</h5>
            <h6>Smart<br/>Watch series 7</h6>
            <p>From $399 or<br/>$16.62/mo.<br/>for 24 mo.</p>
          </div>
          </div>
          </div>
          <div className="col-3">
          <div className="famous-card position-relative">
            <img  src="images/laptop13.png" alt="phone"
             className="phone-watch img-fluid"/>
            <div className="famous-content position-absolute">
            <h5 className="text-dark">Studio Display</h5>
            <h6 className="text-dark">600 nits of brightness.</h6>
            <p  className="text-dark">27-inch 5k Retina display</p>
          </div>
          </div>
          </div>
          <div className="col-3">
          <div className="famous-card position-relative">
            <img  src="images/fomous1.jpg" alt="phone"
             className="phone-watch img-fluid"/>
            <div className="famous-content position-absolute">
            <h5 className="">Smartphones</h5>
            <h6 className="">Smartphone<br/>13 Pro.</h6>
            <p  className="">Now in Green<br/>From $999.000 <br/>or 41.62/mo. for 24mo</p>
          </div>
          </div>
          </div>
          <div className="col-3">
          <div className="famous-card position-relative">
            <img  src="images/laptop13.png" alt="phone"
             className="phone-watch img-fluid"/>
            <div className="famous-content position-absolute">
            <h5 className="text-dark">Studio Display</h5>
            <h6 className="text-dark">600 nits of brightness.</h6>
            <p  className="text-dark">27-inch 5k Retina display</p>
          </div>
          </div>
          </div>
        </div>
 </Container>
 <Container>

 </Container>

  <Container class1="special-wrapper py-5 home-wrapper-2">
   <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Special Products</h3>
        </div>
      </div>
      <div className="row">
        <SpecialProducts />
        <SpecialProducts />
        <SpecialProducts />
        <SpecialProducts />
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
  <Container class1="marquee-wrapper py-5 home-wrapper-2">
  
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className="d-flex">
             <div className="mx-4 w-25">
              <img src="images/Brand-01.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-02.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-03.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-04.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-05.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-06.png" alt="Brand"/>
           </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-07.png" alt="Brand"/>
             </div>
             <div className="mx-4 w-25">
              <img src="images/Brand-08.png" alt="Brand"/>
             </div>
          </Marquee>
          </div>
      </div>
    </div>
  </Container>

  <Container class1="blog-wrapper py-5 home-wrapper-2">
    
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
     </div>
      <div className="row">
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
      </div>
   
  </Container>
  </>
  );
}

export default Home;
