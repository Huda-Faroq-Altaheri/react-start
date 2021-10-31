
import style from "./Portfolio.module.css";
import images from "./images/image.js";
import React, { Component } from 'react';
import reactDom from "react-dom";
import $ from "jquery";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import styleModal from "../PortfolioModal/PortfolioModal.module.css"



export default class Portfolio extends Component {

    

    componentDidMount(){

        display(); 
        modal();

        function display()
        {
            let ters=``;
            images.map( (image)=>{
                ters+=`
                <div class="col-md-4  my-3 ">
                        <div class="${style.item}"}>  
                            <img src="${image.src}" class="${style.itemImg} w-100" alt="${image.name}" />
                            <div class="${style.overlay} d-flex justify-content-center align-items-center" 
                              id='${image.name}'   target='${image.src}'  title='${image.description}'>
                             <i class="fas fa-plus fa-5x text-white"></i>
                            </div>
                          </div>
                        </div>
               `
             })
             document.getElementById("rowDisplay").innerHTML=ters;
        }
     
       

        // take overlay inFormation 
        function modal(){
            
            $(`.${style.overlay}`).on('click',function(){

                $(`.${styleModal.displayModal}`).removeClass("d-none");
                $(`.${styleModal.displayModal}`).addClass("d-block");

                let imgInfo={
                    title:$(this).attr('id'),
                    src:$(this).attr('target'),
                    desc:$(this).attr('title')
               };

           // send inFormation to  PortfolioModal Component      
            reactDom.render(
                <React.StrictMode>
                <PortfolioModal  imgInfo={imgInfo}/>
                </React.StrictMode>,
                document.getElementById('PortfolioModal')
            );
   
            });

        }


    }

    render() {
        return (
              <section id="Portfolio" className="py-5">
              <div className="container py-5">
                <div className={`text-center  ${style.title}`}>
                    <h2>PORTFOLIO</h2>
                    <div className={`${style.line}`}>
                        <i className={`fas fa-star fs-2 my-2 ${style.mainColor}`}></i>
                    </div>
                </div>
            
                <div className="row " id="rowDisplay">
                </div>

                <div  id="PortfolioModal">
                </div>

               </div>
              </section>      
           
        )
    }
}
