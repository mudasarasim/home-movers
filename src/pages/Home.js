import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Home.css';

const Home = () => {
  const cities = ["Sharjah", "Dubai", "Abu Dhabi"];
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 2000); // Change city every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/new-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          position: "relative"
        }}
      >
        <Container className="text-center text-white">
          <h2 className="fw-bold mb-3">BOOK YOUR MOVE E-MOVERS</h2>
          <p className="mb-4">
            Book Your Move No matter the distance, no matter the size, every move <br />
            we handle receives the same dedicated care, planning & professionalism.
          </p>

          <div className="mb-4">
            <Button variant="success" className="me-3 px-4 py-2">Book on Whatsapp</Button>
            <Button variant="danger" className="px-4 py-2">Book on Call</Button>
          </div>

          <Form className="p-4 rounded shadow-lg" style={{ maxWidth: "700px", margin: "0 auto", color: "#000", background: 'transparent' }}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Pickup From" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Drop At" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>-- Mover Type --</option>
                <option>Apartment Moving</option>
                <option>Villa Movers</option>
                <option>Office Relocation</option>
                <option>Commercial Movers</option>
              </Form.Select>
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Request A Call Back Within 15 Minutes
            </Button>
          </Form>
        </Container>
      </div>
      <div style={{ backgroundColor: "#fff", padding: "60px 0" }}>
        <Container>
          <Row className="align-items-center">
            {/* Left Column */}
            <Col md={6}>
              <h2 className="fw-bold mb-3" style={{ fontSize: "40px" }}>
                Serving <span className="city-animation" key={cities[currentCityIndex]}>
                  {cities[currentCityIndex]}
                </span>
                ,<br />
                <span>With Excellence</span>
              </h2>


              <p className="mb-4" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                Your trusted partner for your next residential, commercial, or office move in
                Abu Dhabi, Dubai. No matter how large or small your move is, we are here to
                turn it into a memorable move for you. <b>Luxury Packing:</b> With our wide range of
                packing materials from tapes, and packing paper to special boxes to deal with
                fragile items, we take the hassle out of your shoulder.
                <br /><br />
                <b>Diverse Range of Services:</b> With a wide range of services, from dismantling to packing, loading,
                unloading, unboxing, and assembling, we have got you covered.
              </p>

              <Button variant="danger" className="mb-4 px-4 py-2" style={{ borderRadius: "30px" }}>
                Get a Quote
              </Button>

              <Row className="mt-3">
                <Col xs={6}>
                  <h4 className="fw-bold text-danger">2,500+</h4>
                  <p>Happy Customers</p>
                </Col>
                <Col xs={6}>
                  <h4 className="fw-bold text-danger">2015</h4>
                  <p>Established Since</p>
                </Col>
              </Row>
            </Col>

            {/* Right Column */}
            <Col md={6}>
              <img
                src='img/zxc.png'
                alt="Moving Boxes"
                className="img-fluid rounded"
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Two Final Cards Section */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "60px 0" }}>
        <Container>
          <Row className="g-4">
            {/* Card 1: Movers and Packers */}
            <Col md={6}>
              <div className="shadow-sm bg-white rounded overflow-hidden h-100">
                <img
                  src="img/zxc.png"
                  alt="Movers and Packers"
                  className="img-fluid"
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <div style={{ background: "#b30000", color: "#fff", padding: "12px", textAlign: "center", fontWeight: "bold" }}>
                  Movers and Packers
                </div>
                <div className="p-4 para">
                  <p>
                    At E Home Movers, we understand that some moving situations require a more personalized
                    touch, especially for women and families who prefer female professionals to handle their
                    relocation. That’s why we offer Lady Movers, a dedicated service designed to provide a
                    comfortable, safe, and stress-free moving experience with an all-female moving team.
                  </p>
                  <hr />
                  <p>
                    Our Lady Movers service ensures that your belongings are handled with the utmost care,
                    respect, and professionalism. Whether you're relocating your home, apartment, or villa,
                    our trained female movers specialize in packing, organizing, and transporting your items
                    securely. We use high-quality packing materials to protect delicate items, ensuring
                    everything reaches your new location in perfect condition.
                  </p>
                  <div className="text-center mt-3">
                    <Button variant="danger" className="px-4 py-2 rounded-pill">Get Instant Quote Now</Button>
                  </div>
                </div>
              </div>
            </Col>

            {/* Card 2: Need Storage? */}
            <Col md={6}>
              <div className="shadow-sm bg-white rounded overflow-hidden h-100">
                <img
                  src="img/storage.jpg" // Replace with your correct path
                  alt="Need Storage?"
                  className="img-fluid"
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <div style={{ background: "#b30000", color: "#fff", padding: "12px", textAlign: "center", fontWeight: "bold" }}>
                  Need Storage?
                </div>
                <div className="p-4 para">
                  <p>
                    Whether you're in the midst of a move or simply need extra space, storage services offer
                    a convenient solution for keeping your belongings safe and secure. Modern storage
                    facilities provide a range of options, from short-term rentals to long-term arrangements,
                    making them ideal for various needs. They can also help with packing and labeling.
                  </p>
                  <hr />
                  <p>
                    For those in the process of moving, storage services can be a lifesaver. If there's a gap
                    between moving out of your old place and into your new one, a storage unit can serve as a
                    temporary holding space for your items. Many moving companies also offer integrated
                    storage solutions, allowing you to store your belongings with the same provider handling
                    your relocation. These experts can handle everything.
                  </p>
                  <div className="text-center mt-3">
                    <Button variant="danger" className="px-4 py-2 rounded-pill">Get Instant Quote Now</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Stress-Free Apartment Moving Section */}
      <div style={{ backgroundColor: "#fff", padding: "60px 0", margin: '0px' }}>
        <div className="text-center" style={{width: '100%'}}>
          <h1 className="fw-bold mb-3 text-danger">Stress-Free Apartment Moving</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "19px", lineHeight: "1.7" }}>
            Moving to a new apartment can be both exciting and overwhelming. Whether you’re upgrading
            to a larger space or downsizing for simplicity, the process of apartment moving requires
            careful planning and execution. One of the first steps is to declutter your belongings.
            Go through each room and decide what to keep, donate, or discard. This not only reduces the
            number of items to move but also helps you start fresh in your new home.
          </p>

          <div className="my-4">
            <img
              src="img/fdo.png" // Update path if needed
              alt="People Moving"
              className="img-fluid"
              style={{ maxHeight: "310px", objectFit: "contain", marginLeft: '8px' }}
            />
          </div>

          <div
            className="py-5"
            style={{
              background: "linear-gradient(to bottom, #fff, #8B0000, #8B0000)",
              borderRadius: "12px",
              marginTop: '-60px'
            }}
          >
            <h4 className="text-white fw-bold mb-5 mt-5">Ready to Get Started?</h4>
            <Row className="g-4 justify-content-center px-4">
              {/* Card 1 */}
              <Col md={4}>
                <div className="bg-white crd p-4 text-center h-100 shadow-sm">
                  <img src="img/1-icon.png" alt="Icon 1" style={{ height: "150px", marginBottom: "10px" }} />
                  <h4 className="fw-bold text-danger">Personalized Moving Advice</h4>
                  <p style={{ fontSize: "20px" }}>
                    Get a no-obligation consultation to discuss your moving needs and plan the best
                    approach tailored just for you.
                  </p>
                </div>
              </Col>

              {/* Card 2 */}
              <Col md={4}>
                <div className="bg-white p-4 text-center h-100 shadow-sm crd">
                  <img src="img/2-icon.png" alt="Icon 2" style={{ height: "150px", marginBottom: "10px" }} />
                  <h4 className="fw-bold text-danger">Professional Packing & Loading</h4>
                  <p style={{ fontSize: "20px" }}>
                    Our expert team carefully packs and loads your belongings using quality materials
                    to ensure maximum protection during transit.
                  </p>
                </div>
              </Col>

              {/* Card 3 */}
              <Col md={4}>
                <div className="bg-white crd p-4 text-center h-100 shadow-sm">
                  <img src="img/3-icon.png" alt="Icon 3" style={{ height: "150px", marginBottom: "10px" }} />
                  <h4 className="fw-bold text-danger">Secure Delivery & Unloading</h4>
                  <p style={{ fontSize: "20px" }}>
                    We guarantee safe transportation and careful unloading at your new location,
                    ensuring everything arrives intact and hassle-free.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="text-center mt-5">
              <Button variant="danger" className="px-4 py-2 rounded-pill">
                Get Instant Quote Now
              </Button>
            </div>
          </div>
        </div>
      </div>


    </>

  );
};

export default Home;
