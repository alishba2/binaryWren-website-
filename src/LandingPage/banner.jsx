import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/banner1.png';
import img2 from "../assets/banner2.png"

import "./landingpage.scss"
function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-image-container">


          <img
            className="d-block  increased-size"
            src={img1}
            alt="First slide"
          />


          <div className="box-description" >
          <h1 className="box-title">LEADING SOFTWARE DEVELOPMENT OUTSOURCING COMPANY IN PAKISTAN</h1>

            <p>Binary wren, a top provider of outsourcing software development in Vietnam, has
              over ten years of experience in delivering high-quality software development
              services. We are committed to offering our clients, both locally and
              internationally, innovative and excellent alternatives.</p>
          </div>

          <div className="black-filter"></div>
          {/* <div className='group-achievement'>
            <div className='achievement-row'>
              <div className='single-achievement'>
                First
              </div>
              <div className='single-achievement'>
                Second
              </div>
              <div className='single-achievement'>
                Third
              </div>
            </div>
            <div className='achievement-row'>
              <div className='single-achievement'>
                Fourth
              </div>
              <div className='single-achievement'>
                Fifth
              </div>
              <div className='single-achievement'>
                Sixth
              </div>
            </div>
          </div> */}
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">




          <img
            className="d-block  increased-size"
            src={img2}
            alt="Second slide"
          />
          <div className="black-filter"></div>

          <div className="box-description" >
          <h1 className="box-title">LEADING SOFTWARE DEVELOPMENT OUTSOURCING COMPANY IN PAKISTAN</h1>

            <p>Binary wren, a top provider of outsourcing software development in Vietnam, has
              over ten years of experience in delivering high-quality software development
              services. We are committed to offering our clients, both locally and
              internationally, innovative and excellent alternatives.</p>
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block  increased-size"
            src={img1}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
          <div className="black-filter"></div>
          
          <div className="box-description" >
          <h1 className="box-title">LEADING SOFTWARE DEVELOPMENT OUTSOURCING COMPANY IN PAKISTAN</h1>

            <p>Binary wren, a top provider of outsourcing software development in Vietnam, has
              over ten years of experience in delivering high-quality software development
              services. We are committed to offering our clients, both locally and
              internationally, innovative and excellent alternatives.</p>
          </div>
        </div>


      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
