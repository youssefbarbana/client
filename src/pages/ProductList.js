import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../js/actions/product";
import Navbar from "./Navbar";
import Products from "../pages/Products";
import { Search } from "@mui/icons-material";
import "./Navbar.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const loadProduct = useSelector((state) => state.productReducer.loadProduct);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const [search, setsearch] = useState("");
  const searchProduct = (search) => {
    setsearch(search);
  };
  return (
    <div>
      <Navbar searchProduct={searchProduct} />
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => searchProduct(e.target.value)}
        />

        <Search />
      </div>

      <div
        style={{
          marginTop: "200px",
          display: "grid",
          gridTemplateColumns: "20% 20% 20% 20% 20%",
          marginLeft: "30px",
          height: "300px",
        }}
      >
        {loadProduct ? (
          <h2>loading..</h2>
        ) : (
          products
            .filter((el) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )

            .map((el) => <Products key={el._id} product={el} />)
            .reverse()
        )}
      </div>
    </div>
  );
};

export default ProductList;
