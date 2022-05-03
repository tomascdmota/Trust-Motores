import React,{Component, useState}  from 'react';
import GetQuote from './getquote';

const Home = () => {

    const [status, setStatus] = useState("Enviar");

  

   
    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("A enviar");


        const {mat, email, sub, part, spart } = e.target.elements;


        let details = {
            mat: mat.value,
            email: email.value,
            sub: sub.value,
            part: part.value,
            spart: spart.value
        };

        // Response to be sent

        let response = await fetch("http://localhost:3002/getQuote", {
            method: "POST",
            headers: {
                "Content-Type":"application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Mensagem Enviada!")
        let result = await response.json();
        alert(result.status)
    }


   
    return(
    <section className="home">
        <div className='home-row'>
                
                
                <div className="get-quote">
		            <div className="quote-title" id="getqt">
				<h1>Peça um orçamento: <br></br>
                 </h1>
				</div>

			<form data-testid="form"  className="form-inline" onSubmit={e => {handleSubmit(e)}} >


				<div className="validate-input" data-validate = "Matricula is required">
					<input data-testid="form-name" label="matricula" className="input-box" type="text" id="mat" name="matricula" placeholder="Matrícula" />
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" label="email" type="email" id="email" name="email" placeholder="Email" />
				</div>

				<div className="validate-input" data-validate = "Subject is required">
					<input className="input-box" label="subject" type="text" id="sub" name="subject" placeholder="Assunto" />
				</div>

                <div className="validate-input" data-validate = "Part is required">
					<input className="input-box" label="part" type="text" id="part" name="part" placeholder="Peça" />
				</div>

               
                <div className="validate-input" data-validate = "Condição is required">
					<input className="input-box" label="spart" type="text" id="spart" name="spart" placeholder="Condição da Peça" />
				</div>


				<div className="container-contact1-form-btn">
					<button data-testid="contact-button" type="submit" id="submit" className="contact1-form-btn" >
						<span>
							{status}
						</span>
					</button>
				</div>
			</form>
		</div>
            
        </div>

        
    </section>
    
    
    )
}

export default Home;
