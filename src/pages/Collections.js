import React from 'react'
import pic1 from "./ww1.jpg";
import pic2 from "./ww2.jpg";
import pic3 from "./ww3.jpg";
import './Collections.css';

const Collections = () => {
  return (
    <div>
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src={pic1} className="d-block  mw-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Octane</h5>
        <p>Octane Classic Sporty Silver Dial Stainless Steel Strap Watch</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={pic2} className="d-block mw-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Apple</h5>
        <p>Apple Watch Series 8</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={pic3} className="d-block mw-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fossil</h5>
        <p>Townsman Automatic Black Eco Leather Watch</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
export default Collections