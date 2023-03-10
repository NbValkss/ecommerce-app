import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch1 from '../images/watch-1.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';


const ProductCard = (props) => {
   const { grid } = props;
   let location = useLocation();
  return (
  <>
  

  <div 
         className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
         <Link to={`${location.pathname==="/" ? "product/:id" : ":id"}`}  className="product-card position-relative noline">
            <div className="wish-icon position-absolute">
             <button className="border-0 bg-transparent">
             <img src={wish} alt="wish"/>
             </button>
             </div>
         <div className="product-image">
            <img src={watch} className="img-fluid" alt="product"/>
            <img src={watch1} className="watch-1 img-fluid" alt="product"/>
         </div>
         <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
             count={5} 
             size={24} 
             value="4" 
             edit={false} 
             activeColor="#ffd700"/>
             
             <p className={ `description ${grid === 12 ? "d-block" : "d-none"}`}>
               At vero eos et accusamus et iusto odio dignissimos ducimus qui
               blandititiis praesentium voluptatum delenti atque currupti quos
               dolores et quas molestias exepturi sint occaecati cupiditate 
               non provident, similique sunt...
             </p>
            <p className="price">$100.00</p>
         </div>
         <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            
                        
            <img src={prodcompare} alt="compare"/>
               
            
              
                <img src={view} alt="view"/>
               
            
                
                <img src={addcart} alt="addcart"/>
               
            </div>
          </div>
          
            
        </Link>
        </div>

        <div 
         className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>

         <Link to={`${location.pathname==="/" ? "product/:id" : ":id"}`} className="product-card position-relative noline">
            <div className="wish-icon position-absolute">
             <button  className="border-0 bg-transparent">
             <img src={wish} alt="wish"/>
             </button>
             </div>
         <div className="product-image">
            <img src={watch} className="img-fluid" alt="product"/>
            <img src={watch1} className="watch-1 img-fluid" alt="product"/>
         </div>
         <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
             count={5} 
             size={24} 
             value="4" 
             edit={false} 
             activeColor="#ffd700"/>
             
             <p className={ `description ${grid === 12 ? "d-block" : "d-none"}`}>
               At vero eos et accusamus et iusto odio dignissimos ducimus qui
               blandititiis praesentium voluptatum delenti atque currupti quos
               dolores et quas molestias exepturi sint occaecati cupiditate 
               non provident, similique sunt...
             </p>
            <p className="price">$100.00</p>
         </div>
         <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            
                        
            <img src={prodcompare} alt="compare"/>
               
            
              
                <img src={view} alt="view"/>
               
            
                
                <img src={addcart} alt="addcart"/>
               
            </div>
          </div>
          
            
        </Link>
        </div>
   
   </>
  );
}

export default ProductCard
