import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/bg3.jpg')",
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
  );
};

export default Home;
