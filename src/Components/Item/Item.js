import React from "react";
import "./Item.css";
const Item = (props) => {
    return (
        <div className="product">
            <h1>{props.product.Name}</h1>
            <img src={props.product.img} alt="image" width="200px" />
            <h2>Price : {props.product.price}</h2>
        </div>
    );
};

export default Item;
