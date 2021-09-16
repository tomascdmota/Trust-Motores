import React, {Component, useState} from 'react';
import '../css/contactform.css';

const Contact = () => {
	
	const [status, setStatus] = useState("enviar");

	const handleSubmit = async(e) => {
		e.preventDefault();
		setStatus("Sending...");

		const {name, email, subject, message} = e.target.elements;

		// Details of the email 
		let details = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value
		};

		// Response to be sent 
		let response = await fetch("http://localhost:3002/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});

		setStatus("Enviar");
		let result = await response.json();
		alert(result.status);
	};




    return (
        <div className="contact-form">
			<div className="contact-form-title">
				<h1>Contacte-nos</h1>
			</div>
			
     	<div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1628076677/IT_Support_Isometric_m2e0zf.svg" alt="IMG"/>
			</div>

			<form data-testid="form"  className="contact1-form validate-form" onSubmit={handleSubmit} >
				<span className="contact1-form-title">
					Entre em contacto connosco
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input data-testid="form-name" label="matricula" className="input1" type="text" id="name" name="name" placeholder="Nome" required/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" label="email" type="text" id="email" name="email" placeholder="Email" required />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" label="subject" type="text" id="subject" name="subject" placeholder="Assunto" required />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" id="message" placeholder="Em que podemos ajudar?" required ></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<div className={status ? 'msg msgAppear': 'msg'}></div>
					<button data-testid="contact-button" type="submit" id="submit" className="contact1-form-btn" >
						<span>{status}
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
            
        </div>
    )
}

export default Contact;
