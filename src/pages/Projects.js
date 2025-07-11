import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const Projects = () => {
  const projectsByLocation = {
    'Rahman Island': [
      { img: '/img/Villa1.jpg' },
      { img: '/img/Villa 2.jpg' },
      { img: '/img/Villa 3.jpg' },
    ],
    'Saadiyat Lagoons': [
      { img: '/img/Villa 4.jpeg' },
      { img: '/img/Villa 5.jpeg' },
    ],
  };

  const locations = Object.entries(projectsByLocation);

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
                  }}
                >
                  <h2>Our Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container my-5">
          <h2 className="text-teal fw-bold mb-4 text-center">PROJECTS</h2>            
          <div className="row g-4 justify-content-center">
            {locations.map(([location, images], idx) => (
              <div className="col-md-6 col-lg-5" key={location}>
                <div className="card border-0 shadow-sm p-2">
                  <div
                    id={`carousel-${idx}`}
                    className="carousel slide position-relative"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner rounded">
                      {images.map((project, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                          <img
                            src={project.img}
                            className="d-block mx-auto"
                            style={{
                              height: '250px',
                              objectFit: 'cover',
                              maxWidth: '80%',
                              borderRadius: '10px',
                            }}
                            alt={`Project ${i + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Prev Arrow */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${idx}`}
                      data-bs-slide="prev"
                      style={{
                        width: '30px',
                        height: '30px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: '10px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: '50%',
                      }}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundSize: '100% 100%',
                        }}
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                      
                    {/* Next Arrow */}
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${idx}`}
                      data-bs-slide="next"
                      style={{
                        width: '30px',
                        height: '30px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: '10px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: '50%',
                      }}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundSize: '100% 100%',
                        }}
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <h5 className="text-center fw-bold mt-3">{location}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  );
};

export default Projects;