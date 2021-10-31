import React from 'react';
import style from "./About.module.css";

export default function About() {
    return (
        <>
        <section className={`${style.mainBgColor} py-5`} id="about">
        <div className={`text-center ${style.title} py-5`}>
                    <h2>ABOUT</h2>
                    <div className={`${style.line}`}>
                        <i className={`fas fa-star fs-2 my-2 ${style.mainColor}`}></i>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="item">
                            <p className={` ${style.mainColor} p-3 lead`}>
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <p className={` ${style.mainColor} p-3 lead`}>
                            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional !
                            </p> 
                        </div>

                    </div>
                </div>
        </section>
            
        </>
    )
}
