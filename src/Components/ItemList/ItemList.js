import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = (props) => {
    return (
        <div className="Item_list">
            <div className="ItemList">
                {props.product.map((element) => (
                    <Item product={element} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
