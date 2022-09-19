import React, { Component } from "react";
import product from "./product.json"

export default class Products extends Component {

    constructor(props) {super(props)}

    render() {
        return (
          <div style={{ padding: "2rem" }}>

            <div>
              <button  type="" style={{float:"right"}} >FILTER</button>
            </div>

            {product.map((record, i) => (
              <div
                style={{
                  border: "2px solid black",
                  width: "300px",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <img
                  src={require(`../images/top/${record.image}.png`)}
                  alt="image"
                  style={{ width: "200px", height: "100px" }}
                />
                <h2>{record.productName}</h2>
                <h3> ₹ {record.productPrice}</h3>
                <div>
                  <p>Qty :<button className="m-1"> - </button>1
                    <button className="m-1"> + </button>
                  </p>
                </div>
                <button variant="primary">Add To Cart</button>
              </div>
            ))}
          </div>
        );
    }
}
