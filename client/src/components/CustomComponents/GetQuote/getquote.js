import React, {useState} from 'react'
import './getquote.css';
import Dropdown from '../DropDown/Dropdown';

export default function GetQuote() {
	
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [matricula, setMatricula] = useState('');

	const parts = [{value: "Peça"},{value: "Motor"},{value: "Caixa de velocidades"},{value: "Turbos e Injetores"},]

	const estado = [{value: "Serviço"},{value: "Reconstrução"},{value: "Novo"},{value: "Reconstruído"},]



    return (
        <div className='get-quote'>
			
		<div className="quote-title" id="getqt">
				<h1>Peça um orçamento: <br></br>
                 </h1>
				</div>

			<div data-testid="form"  className="form-inline">


				<div className="validate-input" data-validate = "Matricula is required">
					<input  className="input-box" type="text" name="matricula" value={matricula} placeholder="Matrícula" onChange={(e) => setMatricula(e.target.value)} />
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" label="email" type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>

				<div className="validate-input" data-validate = "Subject is required">
					<input className="input-box" label="subject" type="text" id="subject" name="subject" placeholder="Assunto" value={subject} onChange={() => setSubject(subject)}/>
				</div>

               <Dropdown options={parts}/>
			   <Dropdown options={estado}/>
				

				<div className="container-contact1-form-btn">
					<button data-testid="contact-button" type="submit" id="submit" className="contact1-form-btn" >
						<span>
							Enviar
						</span>
					</button>
				</div>
			</div>
		</div>
    )
}

