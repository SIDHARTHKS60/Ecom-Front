import React from 'react'
import ImageSlider from "../components/ImageSlider";
import About from "../components/About.jsx"
import Img1 from "../images/top/img1.png";
import Img2 from "../images/top/img2.png";
import Img3 from "../images/top/img3.png";
import Img4 from "../images/top/img4.png";
import Img5 from "../images/top/img5.png";
import Img6 from "../images/top/img6.png";

const topImages = [Img5, Img6,Img1, Img2, Img3, Img4];
export default function Home() {
  return (
    <div>
    <div >
      <ImageSlider topImages={topImages} />
    </div>
    <div>
      <br/>
    </div>
    <div>
      <About/>
    </div>
    </div>
  )
  }


 