import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const showresults = "Showing 01-12 of 139 results";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);
  console.log(products);

  //Pageination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function change to current page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   //filter product based by Category
   const [selectescategory,setSelectescategory] = useState('All');
   const menuItems = [...new Set(Data.map((val) => val.category))];
   const filterItem = (curCat) =>{
     const newItem = Data.filter((newVal) => {
       return newVal.category === curCat;
     })
     setSelectescategory(curCat);
     setproducts(newItem)
   }




  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop" />
      {/* shop Page  */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showresults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* Products Cards  */}
                <div>
                  <ProductCard gridList={gridList} products={currentProducts} />
                </div>

                {/* Pagination */}
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList}/>
                <ShopCategory  
                filterItem={filterItem}
                setItem={setproducts}
                menuItems={menuItems}
                setproducts={setproducts}
                selectescategory={selectescategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
