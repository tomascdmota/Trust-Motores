import React, { useState } from 'react';
import './modal.css';

const Modal = ({handleClose}) => {

    const [status, setStatus] = useState("enviar");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("Sending...");
        console.log(status);

        const {name, email, tel, message} = e.target.elements;

        // Info on the email
        let details = {
            name: name.value,
            email: email.value,
            tel: tel.value,
            message: message.value
        }

        //Response to be sent to the backend

        let response = await fetch("http://localhost:3002/modal",{
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });

    setStatus("A enviar");
    let result = await response.json();
    alert(result.status)
    }



    // Children is a reference to props.children that represents the opening and closing of the modal

    return (
        <div className="modal" data-testid="modal">
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div onClick={handleClose} className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                            <button onClick={handleClose} ><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1631613546/image_2_bp0lsh.svg" alt="modal-button"/></button>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACTE-NOS</span>
                                </div>
                                <div className="app-contact">Contactos: (+351) 219 258 363 / 963 824 837 </div>
                            </div>
                            <div className="screen-body-item">
                                <form onSubmit={handleSubmit}>
                                <div className="app-form">
                                    <div className="app-form-group">

                                        <input className="app-form-control" placeholder="Nome" type="text" id="name" required/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="Email" type="email" id="email" required />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="Contacto" type="tel" id="tel" required/>
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="Mensagem" type="text" id="message" required/>
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button onClick={handleClose} className="app-form-button">Cancelar</button>
                                        <button className="qbtn" id="submit">Enviar</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>
    )

}

export default Modal;