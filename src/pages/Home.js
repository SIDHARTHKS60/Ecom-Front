import React from 'react'
import ImageSlider from "../components/ImageSlider";

import Img1 from "../images/top/img1.png";
import Img2 from "../images/top/img2.png";
import Img3 from "../images/top/img3.png";
import Img4 from "../images/top/img4.png";
import Img5 from "../images/top/img5.png";
import Img6 from "../images/top/img6.png";
import Img7 from "../images/top/img7.png";
const topImages = [Img5, Img6, Img7, Img1, Img2, Img3, Img4];
function Home() {
  return (
    <div>
      <ImageSlider topImages={topImages} />
    </div>
  );
}

export default Home