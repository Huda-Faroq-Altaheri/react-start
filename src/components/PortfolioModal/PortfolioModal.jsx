import React, { Component } from 'react';
import style from "./PortfolioModal.module.css";
import $ from "jquery";

export default class PortfolioModal extends Component {


  componentDidMount(){
    

    $(`.closeModal`).on("click",function(){
      closeModal();
    })

    function closeModal()
    {
      $(`.${style.displayModal}`).removeClass("d-block");
      $(`.${style.displayModal}`).addClass("d-none");
    }

  }


    render() {
      console.log(this.props.imgInfo);
      
        return (

    
<div className={`modal fade d-none opacity-100 ${style.displayModal}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className={`modal-dialog modal-xl ${style.modalDialog}`}>
    <div className="modal-content">
      <div className={`modal-header my-0 ${style.bottomHeader}`}>
        <button type="button" className={`  ${style.btnClose}  closeModal me-2 `} data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="modal-body">
        
      <div className={`text-center  ${style.title} ms-auto `}>
            <h2>{this.props.imgInfo.title}</h2>
            <div className={`${style.line}`}>
                <i className={`fas fa-star fs-2 my-2 ${style.mainColor}`}></i>
            </div>
        </div>

          <div className="w-75 mx-auto text-center">
          <img src={this.props.imgInfo.src} className={`w-75  my-2 ${style.itemImg}`} alt={this.props.imgInfo.title} />
          <p className=" p-3">{this.props.imgInfo.desc}</p>
          </div>

      </div>
      <div class={`modal-footer closeModal ${style.topHeader}`}>
        <button type="button" class={`btn ${style.btnBg}  text-white my-2  mx-auto `} data-bs-dismiss="modal"><i className="fas fa-times"></i>  close windows</button>
      </div>
    </div>
  </div>
</div> 





        )

    }
}
