import React, { useState} from "react"
import {phonesData} from "./product.data"
import { Card, Button} from "react-bootstrap"

class Products extends React.Component {

  // constructor (phonesData){super(phonesData);
  //   this.state={item}}

  //const [items,setItems]=useState(phonesData)
 render(){
  
  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>

        {phonesData.map((data,key) => (
        <div className="d-inline-flex">
          <Card
            className="shadow p-3 mb-5 bg-body rounded"
            style={{ width: "20rem" }}
          >
            <Card.Img
              variant="top"
              src={require(`../images/${data.image}.png`)}
              style={{ width: "12rem", height: "15rem" }}
            />

            <Card.Body>
              <Card.Title>{data.productName}</Card.Title>
              {/* <Card.Text>{data.pro}</Card.Text> */}
              <h5>Price : ₹ {data.price}</h5>
              <div>
                <p>
                  Qty :<Button className="m-1"> - </Button>1
                  <Button className="m-1"> + </Button>
                </p>
              </div>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card> 
        </div>
        
      )) 
      }
    </div>
  )
}

}
 export default Products;