function About()
{
    return(
        <>
         <section className="page-section bg-primary text-white  mt-5 mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">I'm Nabeel Hussain & I'm MERN Intern at Eazisols . I have almost 2 years of learning experience in Mongo Db , React.js , Express.js and Node.js. Here are my achievements in this week.I Created a Portfolio Web by using React.js.
                    </p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">Created Multiple Pages of Web with an Interactive UI. Implemented Proper React Routing between these Pages ,Added Weather Forecasting Feature in it ,Added Location Map, Auto Complete Search & Geo Coding APIs such as Geopify and Leaflet
</p></div>
                </div>
                
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Click Here to Download My Portfolio
                    </a>
                </div>
            </div>
        </section>
        
        
        
        
        </>
    );
}

export default About;