import React, { useState } from 'react';
import '../css/modal.css';
import Contact from './Contact'

const Modal = ({handleClose}) => {


    const [status, setStatus] = useState("Enviar");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("A enviar...")

        const {name, email, contact, message} = e.target.elements;

        // Details of the email
        let details = {
            name: name.value,
            email: email.value,
            contact: contact.value,
            message: message.value
        }

        // Post request to send the data to the backend
        let response = await fetch("http://localhost:3002/modal", {
            method: "POST",
            headers: {
                "Content-Type":"application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("A Enviar...");
        let result = await response.json();
        alert(result.status);
        setStatus("Enviado.")

    }


    // Children is a reference to props.children that represents the opening and closing of the modal

    return (
        <div className="modal">
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div onClick={handleClose} class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                            <button onClick={handleClose} ><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1631613546/image_2_bp0lsh.svg"/></button>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div class="app-contact">Contactos: (+351) 219 258 363 / 963 824 837 </div>
                            </div>
                            <div class="screen-body-item">
                                <form onSubmit={handleSubmit}>
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Nome" id="name" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Email" id="email" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Contacto" id="contact"/>
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control" placeholder="Mensagem" id="message"/>
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button onClick={handleClose} class="app-form-button">Cancelar</button>
                                        <button class="app-form-button">{status}</button>
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