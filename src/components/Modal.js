import React from 'react';
import '../css/modal.css';
import Contact from './Contact'

const Modal = ({ handleClose, show, children}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

// Children is a reference to props.children that represents the opening and closing of the modal

    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                
            </section>
        </div>
    )

}

export default Modal;