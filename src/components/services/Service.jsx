import React from 'react'
import './Service.css';

const Service = () => {
  return (
   <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 mt-5'>
                    <div className="banner">
                         <div className="content">
                                <h1 data-aos='fade-right' className="title"><i>Internet Plans</i></h1>
                                <p data-aos='fade-right'className="subtitle"><i>Starting at <span className="price2">$35/mo</span></i></p>
                        </div>
                    </div>
                </div>
                    <h1 className='text-dark fw-bold text-center'><i>All Plans Include</i></h1>
                    <div className='col-md-12 text-center d-flex'>
                    <div className='col-md-4'>
                        <div data-aos='fade-down' className="circle">
                            <i className="bi bi-tag fs-1 text-white"></i> 
                        </div>
                        <h5 className='fw-bold mt-3'><i>Free Standard Installation</i></h5>
                        <p>Sed porttitor lectus nibh. Curabitur <br/>arcu erat, accumsan id imperdiet et, <br/>porttitor at sem. Donec sollicitudin<br/> molestie malesuada. Vivamus suscipit<br/> tortor eget felis porttitor volutpat.</p>  
                    </div>
                    <div className='col-md-4'>
                        <div data-aos='fade-down' className="circle">
                            <i className="bi bi-star fs-1 text-white"></i> 
                        </div>
\                        <h5 className='fw-bold mt-3'><i>18 Month Price Guarantee</i></h5>
                        <p>Sed porttitor lectus nibh. Curabitur<br/> arcu erat, accumsan id imperdiet et, p</p>  
                    </div>
                    <div className='col-md-4'>
                        <div data-aos='fade-down' className="circle">
                            <i className="bi bi-cloud fs-1 text-white"></i> 
                        </div>
                        <h5 className='fw-bold mt-3'><i>Not Data Limits</i></h5>
                        <p>Sed porttitor lectus nibh. Curabitur <br/>arcu erat, accumsan id imperdiet et,po </p>  
                    </div>
                </div>
            </div>
            
        </div>
        <div data-aos='fade-up' className='internet-container'>
            {/* internet plans */}
            <div className='row'>
                    <h1 className='text-white text-center mt-5 fw-bold'><em>Internet Plans</em></h1>
                    <div className='col-md-12 px-3 d-flex mt-5'>
                    <div data-aos='fade-left' className='col-md-4'>
                        <div className="card rounded card-container" style={{backgroundColor:'#151436'}}>
                            <div className='card-body text-center text-white'>
                                <p className='fw-bold'>Basic Internet</p>
                                <h3 className='fw-bold'>85mbps</h3>
                                <div class="price-container">
                                    <span class="currency">$</span>
                                    <span class="price">35</span>
                                    <span class="per-month">/mo</span>
                                </div>
                                <p>Donec rutrum congue</p>
                                <p> Quisque velit nisi</p>
                                <p> Pretium ut lacinia in</p>
                                <p className='text-secondary'> Elementum id enim</p>
                                <p className='text-secondary'> Pellentesque in ipsum id</p>
                            </div>

                        </div>
                    </div>
                    <div data-aos='zoom-in' className='col-md-4 '>
                        <div className="card card-container1" style={{backgroundColor:'#151436'}}>
                            <div className='card-body text-center text-white'>
                                <p className='fw-bold text-dark'>Pro Internet</p>
                                <h3 className='fw-bold text-dark'>120mbps</h3>
                                <div class="price-container">
                                    <span class="currency1">$</span>
                                    <span class="price1">85</span>
                                    <span class="per-month1">/mo</span>
                                </div>
                                <p className='text-secondary'>Donec rutrum congue</p>
                                <p className='text-secondary'> Quisque velit nisi</p>
                                <p className='text-secondary'> Pretium ut lacinia in</p>
                                <p className='text-secondary'> Elementum id enim</p>
                                <p className='text-secondary'> Pellentesque in ipsum id</p>
                            </div>

                        </div>

                    </div>
                    <div data-aos='fade-right' className='col-md-4'>
                        <div className="card card-container" style={{backgroundColor:'#151436'}}>
                            <div className='card-body text-center text-white'>
                                <p className='fw-bold'>Internet + TV</p>
                                <h3 className='fw-bold'>120mbps</h3>
                                <div class="price-container">
                                    <span class="currency">$</span>
                                    <span class="price">120</span>
                                    <span class="per-month">/mo</span>
                                </div>
                                <p>Donec rutrum congue</p>
                                <p> Quisque velit nisi</p>
                                <p> Pretium ut lacinia in</p>
                                <p> Elementum id enim</p>
                                <p className='text-secondary'> Pellentesque in ipsum id</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='container bg-light'>
            {/* plans */}
            <div className='row '>
                <h1 className='text-dark text-center fw-bold'><em>Which Plan is Right For You ?</em></h1>
                    <div className='col-md-12 d-flex flex-column flex-md-row justify-content-center align-items-center pt-5'>
                        <div className='col-md-3'>
                            <div className='progress-circle circle-60'>
                                <svg>
                                  <circle data-aos='fade-right' class="progress-background" cx="75" cy="75" r="70"></circle>
                                  <circle data-aos='zoom-in' class="progress-bar" cx="75" cy="75" r="70"></circle>
                                </svg>
                                <h2 className='circle-value'>60mbps</h2>
                            </div>
                            <p className='text-dark fw-bold ms-4 mt-3'>Casual use</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-secondary me-3"></i>Curabitur arcu erat</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-secondary me-3"></i>Imperdiet et, porttitor</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-secondary me-3"></i>Curabitur arcu erat</p>
                        </div>
                        <div className='col-md-3'>
                            <div className='progress-circle circle-85'>
                                <svg>
                                  <circle data-aos='fade-right' class="progress-background" cx="75" cy="75" r="70"></circle>
                                  <circle data-aos='zoom-in' class="progress-bar" cx="75" cy="75" r="70"></circle>
                                </svg>
                                <h2 className='circle-value'>85mbps</h2>
                            </div>
                            <p className='text-dark fw-bold ms-4 mt-3'>Media Streaming</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-dark me-3"></i>Imperdiet et porttitor</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-dark me-3"></i>Lacinia eget consectet</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill text-dark me-3"></i>Curabitur arcu era</p>
                        </div>
                        <div className='col-md-3'>
                            <div className='progress-circle circle-100'>
                                <svg>
                                  <circle data-aos='fade-right' class="progress-background" cx="75" cy="75" r="70"></circle>
                                  <circle data-aos='zoom-in' class="progress-bar" cx="75" cy="75" r="70"></circle>
                                </svg>
                                <h2 className='circle-value'>120mbps</h2>
                            </div>
                            <p className='text-dark fw-bold ms-4 mt-3'>Multi-device</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3"style={{color:'#008A1C'}}></i>Imperdiet eporttitor</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3"style={{color:'#008A1C'}}></i>Curabitur arcu era</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3"style={{color:'#008A1C'}}></i>Porttitor at sem</p>
                        </div>
                        <div className='col-md-3'>
                            <div className='progress-circle circle-100 circle-120'>
                                <svg>
                                  <circle data-aos='fade-right' class="progress-background" cx="75" cy="75" r="70"></circle>
                                  <circle data-aos='zoom-in' class="progress-bar" cx="75" cy="75" r="70"></circle>
                                </svg>
                                <h2 className='circle-value'>120mbps</h2>
                            </div>
                            <p className='text-dark fw-bold ms-4 mt-3'>Best for businesses</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3" style={{color:'#A0CF00'}}></i>Curabitur arcu erat</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3" style={{color:'#A0CF00'}}></i>Imperdiet et, porttitor</p>
                            <p className='text-dark mt-3 fw-bold'><i data-aos="zoom-in" class="bi bi-check-circle-fill  me-3" style={{color:'#A0CF00'}}></i>Lacinia eget consectet</p>
                        </div>
                    </div>
                    <div className='col-md-12 text-center mt-5'>
                        <button className='btn btn-primary rounded-pill px-4 py-4  fw-bold ' style={{width:'30%'}}>Need More Help Choosing ?<i class="bi bi-chevron-right ms-3"></i></button>
                    </div>
            </div>
            {/* Bundle */}
            <div className='row mt-5'>
                <h1 className='text-dark fw-bold text-center mt-5'><em>Get More When You Bundle</em></h1>
                        <p className='text-secondary text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis
                         porttitor volutpat.<br/> Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Curabitur non nulla sit amet<br/> nisl tempus convallis quis ac lectus.Quisque velit nisi, pretium ut lacinia
                          in, elementum id enim. </p>
                <div className='col-md-12  d-flex'>
                    <div className='col-md-6'>
                        <img  data-aos="zoom-in" src='assets/laptop.png' className='img-fluid' style={{width:'800px'}} />
                    </div>
                    <div className='col-md-6 ms-5'>
                        <div className='bundle-cards col-md-8 text-light px-3 py-2'>
                            <p className='fw-bold'><i  data-aos="zoom-in" class="bi bi-currency-dollar me-4"></i>Better Value</p>
                            <p className='ms-4 text-right'>Sed porttitor lectus nibh. Curabitur arcu<br/> erat, accumsan id imperdie</p>
                        </div>
                        <div className='bundle-cards col-md-8 text-light mt-5'>
                            <p className='fw-bold'><i  data-aos="zoom-in" class="bi bi-phone-fill me-4"></i>Connected Devices</p>
                            <p className='ms-4 text-right'>Sed porttitor lectus nibh. Curabitur arcu erat, accutitor volutpat.</p>
                        </div>
                        <div className='bundle-cards col-md-8  text-light mt-5'>
                            <p className='fw-bold'><i data-aos="zoom-in" class="bi bi-building-fill-add me-4"></i>Custom Packages</p>
                            <p className='ms-4 text-right'>Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdie</p>
                        </div>
                    </div>

                </div>
                <div className='col-md-12 text-center mt-5 mb-3'>
                        <button className='btn btn-primary rounded-pill px-4 py-4  fw-bold ' style={{width:'25%'}}>Customize Your Package<i class="bi bi-chevron-right ms-3"></i></button>
                </div>
            </div>
        </div>
         {/*F.A.Q.*/}
        <div className='container fluid mt-5'>
            <div className='row mt-3'>
                <h1 className='fw-bold'><em>F.A.Q.</em></h1>
                <div className='col-md-12 d-flex'>
                    <div className='col-md-6'>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">
                                  Nulla porttitor accumsan tincidunt?
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                  <div class="accordion-body">
                                  Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                  </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-5">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo">
                                Sed porttitor lectus nibh?
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item mt-5">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree">
                                Vivamus magna justo lacinia eget consectetur?
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 ms-5'>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour">
                                  Quisque velit nisi pretium ut?
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                                  <div class="accordion-body">
                                  Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                  </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-5">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive">
                                Elementum id enim. Sed porttitor lectus nibh?
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item mt-5">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix">
                                Sed porttitor lectus nibh?
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 text-center mt-5 mb-3'>
                        <button className='btn btn-primary rounded-pill px-4 py-4  fw-bold ' style={{width:'20%'}}>Ask A Question<i class="bi bi-chevron-right ms-3"></i></button>
                </div>
            </div>


        </div>

        <div className='container plans-container'>
            <div className='col-md-12 text-center px-3'>
                <h1 className='display-2 fw-bold text-white'>Get The Speeds You Want at the Price You Want</h1>
                <h4 className=' fw-bold mt-3' style={{color:'#BAB9C4'}}><em>TV & Internet</em></h4>
                <button className='btn btn-primary rounded-pill px-4 py-4  fw-bold mt-5' style={{width:'20%'}}>View All Plans<i class="bi bi-chevron-right ms-3"></i></button>
            
            </div>
        </div>
   
   </>
  )
}

export default Service
