import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //fetch item cart to local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);
  //calculate Prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  //handleQuantity Increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //Update Local storage Cart Items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //handleQuantity deascrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      //Update Local storage Cart Items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //handleItem Remove
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );
    //update New cart
    setCartItems(updateCart);
    updateLocalStorage(updateCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //cart Subtotal
  const cartSbtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);
  //Calculate Order Total
  const orderTotal = cartSbtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="conatiner">
          <div className="section-wrapper">
            {/* cart Top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* Table Body */}.
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>

                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price"> ${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>

                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart top End */}
            {/* Cart Bottom */}
            <div className="cart-bottom">
              {/* Checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="coupon code...."
                  />
                  <input type="submit" value="Apply coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                     <CheckOutPage />
                  </div>
                </form>
              </div>
              {/* Checkout box  end*/}
              {/* Shopping Box */}
              <div className="shiping-box">
                <div className="row">
                   {/* Left SEction */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="usa">United Stats (USA)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pk">Pakistan</option>
                          <option value="ind">India</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">London</option>
                          <option value="usa">New York</option>
                          <option value="bd">Dhaka</option>
                          <option value="pk">Korachi</option>
                          <option value="ind">New Dellhi</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <input type="text" name="postalcode" id="postalcode" placeholder="Postcode/ZIP *" className="cart-page-input-text" />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  {/* Right SEction */}
                  <div className="col-md-6 col-12">
                     <div className="cart-overview">
                       <h3>Cart Totals</h3>
                       <ul className="lab-ul">
                          <li>
                            <span className="pull-left">Cart Subtotal</span>
                            <p className="pull-right"> ${cartSbtotal}</p>
                          </li>
                          <li>
                            <span className="pull-left">Shipping and Handelling</span>
                            <p className="pull-right"> Free Shipping</p>
                          </li>
                          <li>
                            <span className="pull-left">Order Total</span>
                            <p className="pull-right"> ${orderTotal.toFixed(2)}</p>
                          </li>
                       </ul>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
