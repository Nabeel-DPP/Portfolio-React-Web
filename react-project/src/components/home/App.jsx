import React from "react";
import "/src/assets/styles/App.css";


function App() {
  

  return (
    <>
   
    <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5" src="/public/avataaars.svg" alt="Avatar Pic" />
                
                <h1 className="masthead-heading text-uppercase mb-0">Nabeel Hussain</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <p className="masthead-subheading font-weight-light mb-0">Web Designer - Web Developer</p>
            </div>
        </header> 

      
    </>
  )
}

export default App;
