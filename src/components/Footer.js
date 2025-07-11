import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0', fontSize: '15px', position: 'relative' }}>
      <Container>
        <Row>
          {/* Areas Served */}
          <Col md={4} className="mb-4">
            <h5 style={{ color: '#8b0000', fontWeight: 'bold' }}>AREAS WE SERVED BUT NOT LIMITED TO</h5>
            <ul className="list-unstyled mt-3">
              <li>Dubai</li>
              <li>Abu Dhabi</li>
              <li>Sharjah</li>
              <li>Ras Al Khaimah</li>
              <li>Fujairah</li>
            </ul>
          </Col>

          {/* Our Services */}
          <Col md={4} className="mb-4">
            <h5 style={{ color: '#8b0000', fontWeight: 'bold' }}>OUR SERVICES</h5>
            <ul className="list-unstyled mt-3">
              <li>Apartment Moving</li>
              <li>Villa Movers</li>
              <li>Office Relocation</li>
              <li>Commercial Movers</li>
              <li>Storage Services</li>
            </ul>
          </Col>

          {/* Reach Us */}
          <Col md={4} className="mb-4">
            <h5 style={{ color: '#8b0000', fontWeight: 'bold' }}>REACH US</h5>
            <ul className="list-unstyled mt-3">
              <li>Y16 – office Number 08 – Dubai</li>
              <li>International City – England Cluster – Dubai</li>
              <li className="mt-2"><FaPhoneAlt className="me-2 text-danger" />+971 56 239 0333</li>
              <li><FaEnvelope className="me-2 text-danger" />info@ehome-emovers.ae</li>
            </ul>
          </Col>
        </Row>

        <hr />

        <div className="text-center text-muted pt-3">
          © 2025 E–Movers. All Rights Reserved. Web Solution by SC Studios
        </div>
      </Container>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971562390333"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '9999',
        }}
      >
        <img
          src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
          alt="WhatsApp"
          style={{ height: '55px', width: '55px' }}
        />
      </a>
    </div>
  );
};

export default Footer;
