import React from 'react';
import style from "./Location.module.css";

export default function Location() {
    return (
        <>
        <section className={`${style.bgColor} py-5`} id="location">
            <div className="container text-white py-5 text-center">
            <div className="row py-5 ">
                <div className="col-md-4">
                    <div className="item">
                        <h2>LOCATION</h2>
                        <div className="my-3">
                        <h4>2215 John Daniel Drive </h4>
                        <h4>Clark, MO 65243</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="item">
                        <h2>AROUND THE WEB</h2>
                        <div className={`${style.icon}  d-flex  text-center justify-content-evenly my-4`}>
                            <i className="fab fa-facebook-f p-3 rounded-circle border border-2 "></i>
                            <i className="fab fa-instagram p-3 rounded-circle border border-2"></i>
                            <i className="fab fa-linkedin-in p-3 rounded-circle border border-2"></i>
                            <i className="fab fa-dribbble p-3 rounded-circle border border-2"></i>                        
                            </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="item">
                        <h2>ABOUT FREELANCER</h2>
                        <div className="my-3">
                            <h4>Freelance is a free to use, MIT</h4>
                            <h4>licensed Bootstrap theme created by .</h4>
                        </div>
                    </div>
                </div>
            </div>

       </div>

        </section>
            
        </>
    )
}
