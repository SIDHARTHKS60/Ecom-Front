import React, { useState } from "react";
import products from "../product.json"

export default function Products () {
    
    const products=this.props.products;

    return(
        <h1>Hello</h1>
        <div>
            {

            }
        </div>
        products.map(product => (
        <Product {...product}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    ));
    )

}
