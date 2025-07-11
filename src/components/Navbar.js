import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaTruck,
  FaStore,
  FaArchive,
  FaHeadset,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarSection = () => {
  return (
    <>
      {/* Top Navbar */}
      <div style={{ backgroundColor: '#a6191f', color: '#fff', fontSize: '17px' }}>
        <Container fluid className="py-2 px-4">
          <Row className="align-items-center">
            <Col md={4} xs={12} className="text-md-start text-center mb-2 mb-md-0">
              <img src="img/logo.png" alt="Logo" style={{ height: '40px' }} />
            </Col>
            <Col md={4} xs={12} className="text-center mb-2 mb-md-0">
              <FaPhoneAlt className="me-2" /> +971 56 239 0333
            </Col>
            <Col md={4} xs={12} className="text-md-end text-center">
              <FaEnvelope className="me-2" /> info@ehome-emovers.ae
              <Button variant="outline-light" size="sm" className="ms-3">
                <FaPhoneAlt className="me-1" />
                QUICK ENQUIRY
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Navbar (Menu) */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
        <Container>
          <Nav className="justify-content-center py-2" variant="pills" defaultActiveKey="#">
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaHome className="me-1 text-danger" />
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaBuilding className="me-1 text-danger" />
                Apartment Moving
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaWarehouse className="me-1 text-danger" />
                Villa Movers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaTruck className="me-1 text-danger" />
                Office Relocation
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaStore className="me-1 text-danger" />
                Commercial Movers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaArchive className="me-1 text-danger" />
                Storage Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className="text-dark texts">
                <FaHeadset className="me-1 text-danger" />
                Contact Us
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default NavbarSection;
