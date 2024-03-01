import React from "react";
import { Link } from "@mui/material";
import Logo from "../../images/logo.png";
import Image1 from "../../images/home1.jpg";
import Image2 from "../../images/home2.jpg";
import Image3 from "../../images/home3.jpg";
import Image4 from "../../images/home4.jpg";
import Image5 from "../../images/home5.jpg";
import Image6 from "../../images/home6.jpg";
import Image7 from "../../images/home7.jpg";
import cardimg1 from "../../images/a11.jpg";
import cardimg2 from "../../images/a12.jpg";
import cardimg3 from "../../images/a13.jpg";
import cardimg4 from "../../images/a14.jpg";
import cardimg5 from "../../images/b11.jpg";
import cardimg6 from "../../images/b12.jpg";
import cardimg7 from "../../images/b13.jpg";
import cardimg8 from "../../images/b14.jpg";
import Simg1 from "../../images/row2/y1.jpg";
import Simg2 from "../../images/row2/y2.jpg";
import Simg3 from "../../images/row2/y3.jpg";
import Simg4 from "../../images/row2/y4.jpg";
import Simg5 from "../../images/row2/y5.jpg";
import Simg6 from "../../images/row2/y6.jpg";
import Simg7 from "../../images/row2/y7.jpg";
import Simg8 from "../../images/row2/y8.jpg";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./home.css";

// slider setting code here

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 3,
};

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar-container">
        <div className="Logo">
          <img src={Logo} />
        </div>
        <ul className="navbar">
          <Link src="/">
            <li>Home</li>
          </Link>
          <Link src="/">
            <li>Gallary</li>
          </Link>
          <Link src="/">
            <li>Mobile</li>
          </Link>
          <Link src="/">
            <li>Cloth</li>
          </Link>
          <Link src="/">
            <li>Today's Deal</li>
          </Link>
        </ul>
      </nav>

      {/* Banner section */}

      <main>
        <div>
          <Carousel>
            <Carousel.Item>
              <img src={Image1} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image2} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image3} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image4} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image5} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image6} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image7} style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
          </Carousel>
        </div>
      </main>

      {/* Card Section */}
      <section className="card-section">
        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <div className="card-img">
              <Card.Img variant="top" src={cardimg1} />
              <Card.Img variant="top" src={cardimg2} />
              <Card.Img variant="top" src={cardimg3} />
              <Card.Img variant="top" src={cardimg4} />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div className="card-img">
              <Card.Img variant="top" src={cardimg5} />
              <Card.Img variant="top" src={cardimg6} />
              <Card.Img variant="top" src={cardimg7} />
              <Card.Img variant="top" src={cardimg8} />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <div className="card-img">
              <Card.Img variant="top" src={cardimg1} />
              <Card.Img variant="top" src={cardimg2} />
              <Card.Img variant="top" src={cardimg3} />
              <Card.Img variant="top" src={cardimg4} />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div className="card-img">
              <Card.Img variant="top" src={cardimg5} />
              <Card.Img variant="top" src={cardimg6} />
              <Card.Img variant="top" src={cardimg7} />
              <Card.Img variant="top" src={cardimg8} />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* slider Section */}
      <section className="slider-section">
        <h3 style={{color:"white",paddingBottom:"60px"}}>This is Slider Section</h3>
        <div className="slider-container">
          <Slider {...settings}>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg1} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg2} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg5} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg6} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg7} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg2} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg3} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg4} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg5} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg6} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg7} style={{objectFit:"cover"}}/>
            </div>
            <div style={{height:"300px",width:"300px"}}>
              <img src={Simg8} style={{objectFit:"cover"}}/>
            </div>
          </Slider>
        </div>
      </section>

      <footer style={{background:"white",padding:"10px"}}>
        copyright@footer.com
      </footer>
    </div>
  );
}
