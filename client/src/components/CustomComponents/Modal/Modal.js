import React, { useState } from 'react';
import './modal.css';
import axios from 'axios';

const Modal = ({handleClose}) => {

    const [status, setStatus] = useState("enviar");
    const [name, setName] = useState('');
	const [email, setEmail] = useState("");
	const [sub, setSub] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async(e) => {
		e.preventDefault(); // Prevents the page from refreshing on form submition

		// Check if e.target and e.target.elements are defined
		if (!e.target || !e.target.elements) {
			console.error('Form or elements not found');
			return;
		  }
		
		  // Attempt to access form elements, providing default values for safety
		  const formName = e.target.elements.name ? e.target.elements.name.value : '';
		  const email = e.target.elements.email ? e.target.elements.email.value : '';
		  const subject = e.target.elements.subject ? e.target.elements.subject.value : '';
		  const message = e.target.elements.message ? e.target.elements.message.value : '';
		
		  // Log the values to help with debugging
		  console.log('Form values:', formName, email, subject, message);

		  // From validation

          if(formName.trim() === ""|| email.trim() === "" || subject.trim() === "" || message.trim() === ""){
            alert("Preencha todos os campos!");
            return;
            
          } else {
            axios
			.post("http://localhost:3001/send-email", {
			  name: formName,
			  email,
			  subject,
			  message,
			})
			.then((response) => {
			  console.log('Response data:', response.data);
			  setStatus(response.data.message);
			  alert("Mensagem enviada! \n A Nossa equipa entrará em contacto assim que possível.")
			  setName("");
			  setEmail("")
			  setSub("")
			  setMessage("");
              handleClose();
			})
			.catch((error) => {
			  console.error('Axios error:', error);
			});
          }
		
		  
	};


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
                                <div className="app-contact">Contactos: (+351) 219 258 363 / 963 093 702 </div>
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