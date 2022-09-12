import "./homepage.css";
import Header from "../components/Header";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import products from "../product.json";



function HomePage() {
  return (
    <div className="Homepage" style={{ margin: -7 }}>
      <Header />
      <h1>HOMEPAGE 1</h1>

      <div className="Homepage">
        {products.map((product) => {
          
            <div key={product.id} className="a">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          
        })}
      </div>
    </div>
  );
}

export default HomePage;