import React from "react";
function Footer()
{
    return(

        <>
         <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                        65-J1, Wapda Block J 1 Wapda Town Phase 1 Town <br /> Lahore, Punjab 05426
                        </p>
                    </div>
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Eazisols</h4>
                        <p className="lead mb-0">
                            
                        Eazisols is a premium software development agency that focuses on quality, innovation, & speed. 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
       
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; & All Rights Reserved</small></div>
        </div>



        </>
    );
}

export default Footer;