import React, { useState } from 'react';
import './Contact.css';

const MivaanContracting = () => {
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
                  <h2>Mivaan Engineering</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Mivaan General */}
      <section className="container my-5 ">
        <div className="row">
          <div className="col"> 
            <h2 className="text-teal fw-bold mb-3">Mivaan Engineering Consultancy</h2>
            <p style={{ textAlign: "justify" }}>
              Mivaan Engineering is a professional Engineering & Consultancy services firm based in Abu Dhabi, UAE. We specialize in delivering Innovative, Sustainable, and Technical solutions across the Oil & Gas, Infrastructure and Industrial Sectors. Our mission is to provide high-quality Consultancy, Engineering Design, and Project Management services that exceed client expectations and adhere to the highest standards of Safety and Quality.
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
              <li>Engineering Design (FEED & Detailed Engineering)</li>
              <li>Project Management & Supervision</li>
              <li>QA/QC documentation</li>
              <li>Machinery & Manpower Solutions & Supplies</li>
              <li>Oil & Gas Infrastructure Solutions</li>
              <li>Civil, Structural, MEP, and Instrumentation Engineering</li>
              <li>Environmental & Regulatory Compliance Advisory</li>
              <li>Technical Documentation and Feasibility Studies</li>
              <li>Consultancy Service For NOC clearances from various Govt. departments</li>
            </ul>
          </div>

          {/* Sectors We Serve*/}
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">Sectors We Serve</h5>
            </div>
            <ul className="ps-4 pt-3 text-dark">
              <li><strong>Oil & Gas </strong></li>
              <li><strong>Infra. Projects</strong></li>
              <li><strong>Industrial Facilities</strong></li>
            </ul>
          </div>

          {/* Strengths */}
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">Why Choose Us?</h5>
            </div>
            <ul className="ps-4 pt-3 text-dark">
              <li>Experienced and Multidisciplinary Engineering Team</li>
              <li>ISO 9001:2015 Certified Engineers Team</li>
              <li>Customer-Centric Approach with Quality & On-Time Project Delivery</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default MivaanContracting;
