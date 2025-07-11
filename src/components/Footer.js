// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5">
      <Container>
        <Row>
          {/* <Col md={3}>
            <h6 className="text-uppercase">Contact Us</h6>
            <h6 className="mt-4 text-uppercase">Connect With Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a href=" www.linkedin.com/in/mivaanengineering"><FaLinkedin size={24} /></a>
              <a href="#"><FaYoutube size={24} /></a>
            </div>
          </Col> */}

          <Col md={1}><div className="border-end h-100 mx-auto"></div></Col>

          {/* <Col md={3}>
            <h6 className="text-uppercase">About Us</h6>
            <p className="mb-1">Overview</p>
            <p className="mb-1">Our Timeline</p>
            <p className="mb-1">Awards and Recognition</p>
          </Col> */}

          <Col md={1}><div className="border-end h-100 mx-auto"></div></Col>

          {/* <Col md={2}>
            <h6 className="text-uppercase">Capabilities</h6>
            <p className="mb-1">News</p>
          </Col>

          <Col md={2}>
            <h6 className="text-uppercase">Careers</h6>
            <p className="mb-1">Vendor Registration</p>
          </Col> */}
        </Row>

        <hr className="my-4" />

        <Row>
          <Col>
            <h6 className="mt-4 text-uppercase">Connect With Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/mivaanengineering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a href="#"><FaYoutube size={24} /></a> */}
            </div>
            <p className="mb-1 text-muted mb-3">
              Copyright 2025 © Mivaan Group. All rights reserved.
            </p>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
