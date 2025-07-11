// pages/ContactUs.js
import React, { useState } from 'react';
import './Contact.css';

const MivaanGeneral = () => {
  return (
    <>
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("img/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Mivaan General</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Mivaan General */}
      <section className="container my-5">
        <div className="row">
          <div className="col"> 
            <h2 className="text-teal fw-bold mb-4">Mivaan General Contracting</h2>
            <p style={{ textAlign: "justify" }}>
              Mivaan General Contracting – L.L.C – S.P.C is a professionally managed engineering and contracting firm based in Abu Dhabi, UAE. We specialize in delivering high-quality construction and infrastructure solutions across a range of sectors including residential, commercial, industrial, and infrastructure projects. We pride ourselves on offering end-to-end construction services that adhere to international standards, local regulations, and sustainable practices.
            </p>
          </div>
        </div>
        
        {/* Services Offered */}
        <div className="row my-4">
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">Services Offered</h5>
            </div>
            <ul className="ps-4 pt-3 text-dark">
              <li>General Construction Contracting</li>
              <li>Civil & Structural Works</li>
              <li>Villas, Residential, and Commercial Building Construction</li>
              <li>Fit-out and Interior Works</li>
              
            </ul>
          </div>
          
          {/* Vision */}
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">Core Values</h5>
            </div>
            <ul className="ps-4 pt-3 text-dark">
              <li><strong>Integrity</strong> – Transparent and ethical business practices</li>
              <li><strong>Quality</strong> – Commitment to excellence in workmanship</li>
              <li><strong>Safety </strong>– Zero-compromise on HSE standards</li>
              <li><strong>Client Satisfaction </strong>– Exceeding expectations through tailored solutions</li>
            </ul>
          </div>

          {/* Strengths */}
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">Our Strengths</h5>
            </div>
            <ul className="ps-4 pt-3 text-dark">
              <li>Skilled Workforce & Technical Expertise</li>
              <li>Local Market Knowledge & Compliance with UAE Regulations</li>
              <li>Timely Project Execution</li>
              <li>Approved Vendor for Various Government & Private Clients</li>
            </ul>
          </div>
        </div>

        {/* Health, Safety & Environment (HSE) */}
        <div className="row">
          <div className="col">
            <h2 className="text-teal fw-bold">Health, Safety & Environment (HSE)</h2>
            <p style={{ textAlign: "justify" }}>
              We are committed to creating and maintaining a safe working environment for our employees, partners, and clients. Mivaan strictly adheres to UAE Labor Laws, Abu Dhabi Municipality (ADM), and other regulating bodies.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default MivaanGeneral;
