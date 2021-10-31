import react from "react";
import style from "./Home.module.css";
import logo from "./images/avataaars.svg"


function Home()
{
    return(
        <>
        <section id="home">
            <div className={` ${style.home} `}>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <div>
                    <div className="home-img">
                        <img src={logo} className={`${style.homeImg}`} alt="home image" />
                    </div>
                    <div className="home-cap">
                        <h1 className="fw-bold text-white my-4"> START REACT </h1>
                        <div className={`${style.line}`}>
                            <i className="fas text-white fa-star"></i>
                        </div>
                        <h4 className="text-white my-5">Graphic Artist - Web Designer - Illustrator</h4>
                    </div>
                    </div> 
                </div>

               
            </div>
        </section>
   
        </>
    )
}
export default Home;