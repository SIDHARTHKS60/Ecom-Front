
const ProductList =()=> {
    const products = this.props.products;
    return products.map(product => (
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        
      />
    ));
  }
