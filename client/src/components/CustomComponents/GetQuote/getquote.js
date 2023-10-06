import React, {useState} from 'react'
import './getquote.css';
import Dropdown from '../DropDown/Dropdown.js';
import axios from 'axios';
import Dropdown from '../DropDown/Dropdown';

export const GetQuote = ({handleClose})=> {
	
	const [email, setEmail] = useState("");
	const [contacto, setSubject] = useState("");
	const [matricula, setMatricula] = useState('');
	const [selectedPart, setSelectedPart] = useState("");
	const [selectedState, setSelectedState] = useState("");

	const parts = [{value: "Peça"},{value: "Motor"},{value: "Caixa de velocidades"},{value: "Turbos e Injetores"},]
	const state = [{value: "Serviço"},{value: "Reconstrução"},{value: "Novo"},{value: "Reconstruído"},]

	
	const handleDropdownChange = (value) => {
		setSelectedPart(value);
		console.log("Selected Value:", value);
	  };

	const handleStateChange = (value) => {
		setSelectedState(value);
		console.log("Selected State: ", value);
	}


	
	
	const handleSubmit = async(e) => {
		e.preventDefault();

		if(!e.target || !e.target.elements) {
			console.error("Form or elements not found");
			return;
		}
		const matricula = e.target.elements.matricula ? e.target.elements.matricula.value : '';
		const email = e.target.elements.email ? e.target.elements.email.value : '';
		const contacto = e.target.elements.contacto ? e.target.elements.contacto.value : '';
		console.log("Form values:", matricula, email, contacto, parts, state);

		if(contacto === "" || email === "" || matricula === "" ){
			alert("Preencha todos os campos!");
			return;
		  }

			axios.post("http://localhost:3001/send-quote", {
			matricula, email, contacto, partVal: selectedPart, state: selectedState
		})
		.then((response) => {
			console.log('Response data:', response.data);
			alert("Pedido enviado!\n A nossa equipa entrará em contacto brevemente.");
			setMatricula("");
			setEmail("");
			setSubject("");
			setSelectedPart("Peça");
			setSelectedState("Serviço");
		}) 
		.catch((error) => {
			console.error("axios error:", error);
		})
			
		
	}


    return (
        <div className='get-quote'>
			
		<div className="quote-title" id="getqt">
				<h1>Peça um orçamento: <br></br>
                 </h1>
				</div>

			<form data-testid="form" onSubmit={handleSubmit} className="form-inline">


				<div className="validate-input" data-validate = "Matricula is required">
					<input  className="input-box" type="text" id="matricula" name="matricula" value={matricula} placeholder="Matrícula" onChange={(e) => setMatricula(e.target.value)} required />
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" label="email" type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
				</div>

				<div className="validate-input" data-validate = "Phone is required">
					<input className="input-box" label="Contacto" type="tel" id="contacto" name="contacto" placeholder="Contacto" value={contacto} onChange={(e) => setSubject(e.target.value)}required/>
				</div>

               <Dropdown options={parts} onValueChange={handleDropdownChange}required/>
			   <Dropdown options={state} onValueChange={handleStateChange}required/>
				

				<div className="container-contact1-form-btn">
					<button data-testid="contact-button" type="submit" id="submit" className="send" >
						<span>
							Enviar
						</span>
						
					</button>
					
				</div>
					<button data-testid="contact-button" onClick={handleClose} type="submit" id="submit" className="cancel" >
							Cancelar
					</button>
					
			</form>
		</div>
    )
}

export default GetQuote;