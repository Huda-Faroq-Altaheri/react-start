import React from 'react'
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <>
        <footer className={`${style.bgColor} py-4`}>
            <div className="d-flex  justify-content-center align-items-center text-white ">
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
            
        </>
    )
}
