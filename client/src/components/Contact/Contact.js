import React, {useState} from 'react';
import './Contact.css';
import Footer from "../Footer/footer.js"
import axios from 'axios';


const Contact = () => {
	
	const [status, setStatus] = useState("Enviar");
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

		  if(formName.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === ""){
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
			})
			.catch((error) => {
			  console.error('Axios error:', error);
			});
		  }
		
		  
	};



    return (
		<div>
        <div className="contact-form">
			<div className="contact-form-title">
				<h1>Contacte-nos</h1>
			</div>
			
     	<div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1628076677/IT_Support_Isometric_m2e0zf.svg" alt="IMG"/>
			</div>

			<form data-testid="form" onSubmit={handleSubmit} className="contact1-form validate-form" >
				<span className="contact1-form-title">
					Entre em contacto connosco
				</span>
				<div className='contact-form-row'>
						
					<div id='left-side'>

					
					<div className="wrap-input1 validate-input" data-validate = "Name is required">
						<input onChange={e => setName(e.target.value)} value={name} className="input1" type="text" id="name" name="name" placeholder="Nome" required/>
						<span className="shadow-input1"></span>
					</div>

					<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input onChange={e => setEmail(e.target.value)} value={email} className="input1" label="email" type="text" id="email" name="email" placeholder="Email" required />
						<span className="shadow-input1"></span>
					</div>

					<div className="wrap-input1 validate-input" data-validate = "Subject is required">
						<input onChange={e => setSub(e.target.value)} value={sub} className="input1" label="subject" type="text" id="subject" name="subject" placeholder="Assunto" required />
						<span className="shadow-input1"></span>
					</div>

					<div className="wrap-input1 validate-input" data-validate = "Message is required">
						<textarea onChange={e => setMessage(e.target.value)} value={message} className="input1" name="message" id="message" placeholder="Em que podemos ajudar?" required ></textarea>
						<span className="shadow-input1"></span>
					</div>
					</div>

				<div id='right-side'>
					<div className="container-contact1-form-btn">
							<div className={status ? 'msg msgAppear': 'msg'}></div>
							<button  data-testid="contact-button" type="submit" id="submit" className="contact1-form-btn" >
								<span>{status}
									</span>
							</button>




						</div>
				</div>
					
				</div>
			</form>
		</div>
	</div>
            
        </div>
		<Footer/>
		</div>
    )
}

export default Contact;
