import React, { useState } from 'react';
import '../css/modal.css';

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
                            <button onClick={handleClose} ><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1631613546/image_2_bp0lsh.svg" alt="modal-button"/></button>
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

                                        <input class="app-form-control" placeholder="Nome" type="text" id="name" required/>
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Email" type="email" id="email" required />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Contacto" type="tel" id="tel" required/>
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control" placeholder="Mensagem" type="text" id="message" required/>
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button onClick={handleClose} class="app-form-button">Cancelar</button>
                                        <button class="app-form-button" id="submit">Enviar</button>
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