import React from 'react';
import style from "./Contact.module.css";

export default function Contact() {
    return (
        <>
        <section className="py-5" id="contact">
           
            <div className={`text-center ${style.title} py-5`}>
                    <h2>CONTACT ME</h2>
                    <div className={`${style.line}`}>
                        <i className={`fas fa-star fs-2 my-2 ${style.mainColor}`}></i>
                    </div>
                </div>

            <div className="col-md-8 col-10 m-auto">

            <form action="" className={`${style.contactForm}`}>
                <div className="mb-3">
                    <label className= {`${style.contactName} form-label`}>Name</label>
                    <input type="text"  className="form-control border-0" id="name" target="name" placeholder="Name" />
                    <ul id="nameInp" className="ms-4 d-none"> <li className="text-danger">Please Enter Your Name</li></ul>
                    <div className={`${style.lineInp}`}></div>
                    </div>

                    <div className="mb-3">
                    <label className= {`email-address ${style.contactName} form-label`}>Email Address</label>
                    <input type="email" className="form-control border-0" id="email-address" target="email-address" placeholder="Email Address" />
                    <ul id="email-address" className="ms-4 d-none"> <li className="text-danger">Please Enter Your Email Address</li></ul>
                    <ul id="email-valid" className="ms-4 d-none"> <li className="text-danger">Not a vaild Email Address</li></ul>
                    <div className={`${style.lineInp}`}></div>
                    </div>

                    <div className="mb-3">
                    <label className= {`phone-number ${style.contactName} form-label`}>Phone Number</label>
                    <input type="number" className="form-control border-0" id="phone-number" target="phone-number" placeholder="Phone Number" />
                    <ul id="phone-number" className="ms-4  d-none "> <li className="text-danger">Please Enter Your Phone Number</li></ul>
                    <div className={`${style.lineInp}`}></div>
                    </div>

                    <div className="mb-3">
                    <label className= {`message ${style.contactName} form-label`}>Message</label>
                    <textarea type="text" className="form-control border-0" id="message" target="message" cols="5" rows="5" placeholder="Message" >
                    </textarea>
                    <ul id="phone-number" className="ms-4 d-none"> <li className="text-danger">Please Enter Your Message</li></ul>
                    <div className={`${style.lineInp}`}></div>
                    </div>

                    <button id="btn" type="button"  className={`btn text-white  px-3 fs-3 rounded-3 border-0 ${style.bgColor}`}>Send</button>


            </form>

            </div>
            
        </section>
            
        </>
    )
}
