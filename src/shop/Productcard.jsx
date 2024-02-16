import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductCard = ({gridList,products}) => {
  
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list" }`}> 
    {
      products.map((product,i) =>(
        <div key={i} className="col-lg-4 col-md-6 col-12">
           <div className='product-item'>
             {/* product Image  */}
               <div className="product-thumb">
                  <div className="pro-thumb">
                      <img src={product.img} alt="" />
                  </div>
                  {/* Product Action Link */}
                  <div className="product-action-link">
                     <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                     <a href="#">
                         <i className="icofont-heart"></i>
                     </a>
                         <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                  </div>
               </div>
               {/* Product Content */}
               
               <div className='product-content'>
                    <h5>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </h5>
                    <p className='productRatting'>
                       <Ratting/>
                    </p>
                    <h6>
                      ${product.price}
                    </h6>
               </div>

           </div>



           {/* List style */}
           <div className='product-list-item'>
             {/* product Image  */}
               <div className="product-thumb">
                  <div className="pro-thumb">
                      <img src={product.img} alt="" />
                  </div>
                  {/* Product Action Link */}
                  <div className="product-action-link">
                     <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                     <a href="#">
                         <i className="icofont-heart"></i>
                     </a>
                         <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                  </div>
               </div>
               {/* Product Content */}
               <div className='product-content'>
                    <h5>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </h5>
                    <p className='productRatting'>
                       <Ratting/>
                    </p>
                    <h6>
                      ${product.price}
                    </h6>
               </div>

           </div>
        </div>
      ))    
      }

    </div>
  )
}

export default ProductCard