function Portfolio()
{
    return(
        <>
       
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image" src="/src/assets/images/1.png" alt="HTML" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image" src="/src/assets/images/2.png" alt="CSS" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image" src="/src/assets/images/3.png"  alt="JS" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image" src="/src/assets/images/4.png" alt="React" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image"  src="/src/assets/images/5.png" alt="Express" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-3x   fa-list"></i></div>
                            </div>
                            <img className="img-fluid p-image" src="/src/assets/images/6.png" alt="Node" />
                        </div>
                    </div>
                </div>
            </div>


    
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">HTML</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/1.png" alt="..." />
                                   
                                    <p className="mb-4">The foundation of web pages, defining content structure with elements like headings, paragraphs, lists, and images.
                                    Focuses on content organization, not visual appearance.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">CSS</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/2.png" alt="..." />
                                   
                                    <p className="mb-4">Controls the look and feel of web pages by applying styles (colors, fonts, layouts) to HTML elements.
                                    Separates content (HTML) from presentation (CSS) for better maintainability.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Javascript</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/3.png" alt="..." />
                                    
                                    <p className="mb-4">Adds interactivity and dynamic behavior to web pages.
                                    Allows user interactions like form submissions, animations, and client-side data manipulation.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">React</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/4.png" alt="..." />
                                    
                                    <p className="mb-4">A popular JavaScript library for building user interfaces (UI) in a component-based way.
                                    Components are reusable pieces that encapsulate UI logic and state, promoting clean and maintainable code.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Express</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/5.png" alt="..." />
                                    
                                    <p className="mb-4">A framework built on top of Node.js for simplified web server development.
                                    Enables rapid creation of APIs (Application Programming Interfaces) and efficient handling of HTTP requests and responses.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Node JS</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src="/src/assets/images/6.png" alt="..." />
                                    
                                    <p className="mb-4">An open-source JavaScript runtime environment that allows running JavaScript code outside a web browser.
                                    Enables building scalable and efficient server-side applications in JavaScript.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas  fa-fw"></i>
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 




        </section>
        </>
    );
}

export default Portfolio;