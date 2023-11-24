import GoodsCard from "../Components/GoodsCard";
import apple from "../images/Goods/apple.png";
import banana from "../images/Goods/banana.jpg";
import orange from "../images/Goods/orange.jpg";
import pear from "../images/Goods/pear.jpg";
import strawberry from "../images/Goods/strawberry.jpg";
import watermelon from "../images/Goods/watermelon.jpg";

import React from "react";

function Task2() {

    const goods = [
        { src: apple, name: "Apple", cost: 12.3 },
        { src: banana, name: "Banana", cost: 14.0 },
        { src: orange, name: "Orange", cost: 3.65 },
        { src: pear, name: "Pear", cost: 1.05 },
        { src: strawberry, name: "Strawberry", cost: 8.5 },
        { src: watermelon, name: "Watermelon", cost: 9.3 }
    ];


    return <div style={{display:"flex", justifyContent:"center"}}>
        <div id="goodsList">
            {goods.map((item, index) => (
                <div key={index} style={{ width: '400px', padding: '8px', display:"flex", justifyContent:"center" }}>
                    <GoodsCard src={item.src} name={item.name} cost={item.cost} />
                </div>
            ))}
        </div>
    </div>;
}

export default Task2;
