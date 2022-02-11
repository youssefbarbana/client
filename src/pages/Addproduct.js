import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../js/actions/product";
import "./Addproduct.css";
const Addproduct = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const id = isAuth ? user._id : null;
  const owner = isAuth ? user.name : null;

  const [product, setproduct] = useState({
    price: "",
    name: "",
    desc: "",
    image: "",
    categorie: "",
    user_id: id,
    shop: owner,
    phone: "",
    localisation: "",
  });

  const dispatch = useDispatch();
  return (
    <div className="con">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            width: "200px",
            color: "white",
            backgroundColor: "gray",
            marginLeft: "50%",
          }}
        >
          close
        </button>
      </Link>
      <div className="add">
        <h3>name:</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setproduct({ ...product, name: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>price:</h3>
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setproduct({ ...product, price: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>number phone:</h3>
        <input
          type="text"
          placeholder="phone"
          onChange={(e) => setproduct({ ...product, phone: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>localisation:</h3>
        <input
          type="text"
          placeholder="localisation"
          onChange={(e) =>
            setproduct({ ...product, localisation: e.target.value })
          }
        />
      </div>
      <div className="add">
        <h3>image:</h3>
        <input
          type="text"
          placeholder="image"
          onChange={(e) => setproduct({ ...product, image: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>categorie:</h3>
        <input
          type="text"
          placeholder="categorie"
          onChange={(e) =>
            setproduct({ ...product, categorie: e.target.value })
          }
        />
      </div>
      <div className="added">
        <h3>description:</h3>
        <textarea
          type="text"
          placeholder="description"
          onChange={(e) => setproduct({ ...product, desc: e.target.value })}
        />
      </div>

      <a href="/product">
        <button
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          save
        </button>
      </a>
    </div>
  );
};

export default Addproduct;
