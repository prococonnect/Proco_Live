import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import heroImg1 from "../assests/images/hero-img-1.png";
import Feature from "../Components/FeatureSection/Feature";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import Overlay from "../Components/Overlay/Overlay";
import Testimonial from "../Components/Testimonal/Testimonal";

const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const schedulingSuccess = searchParams.get("schedulingSuccess");

    if (schedulingSuccess) {
      window.location.href = "/"; // change this to your homepage URL
    }
  }, [location.search]);

  const handleButtonClick = () => {
    // Redirect to booking page when button is clicked
    window.location.href = "https://calendly.com/subh031997/demo";
  };

  return (
    <section>
      <Container className="mb-5">
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1
                className=" mt-4 mb-4 hero__title"
                data-aos="fade-up "
                data-aos-duration="2000"
              >
                Build it Beautiful. <br /> & Unparalleled.
              </h1>
              <p className="mb-4">
                Webify is the all-in-one WordPress theme to build a beautiful
                online presence for you. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Fuga, eaque!
              </p>
            </div>
              <button className="btn" onClick={handleButtonClick}>
                Book OneVOne
              </button>
            
          </Col>

          <Col lg="6" md="6">
            <div className="Tilt-inner">
              <img src={heroImg1} alt="" className="mt-5 w-100 hero__img" />
            </div>
          </Col>
        </Row>
      </Container>
      <Feature />
      <ChooseUs />
      <Testimonial/>
      <Overlay />
    </section>
  );
};

export default Hero;