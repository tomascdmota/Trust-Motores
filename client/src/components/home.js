import React,{useState}  from 'react';
import GetQuote from './getquote';


const Home = () => {

    const [status, setStatus] = useState("Enviar");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("A enviar...");

        const {mat, email , sub, part, pstate} = e.target.elements;

        // Details of email
        let details = {
            mat: mat.value,
            email: email.value,
            sub: sub.value,
            part: part.value,
            pstate: pstate.value
        }


        // Response sent to the backend (server.js)

        let response = await fetch("https://www.trustmotores.com/app/server.js/getQuote", {
            method: "POST",
            header: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Mensagem enviada");
        let result = await response.json();
        alert(result.status);
    }


    return(
    <section className="home">
        <div className='home-row'>
                <div className="home-text">
                <h1> Comércio De Produtos Automóvel<br></br></h1>
                
                </div>
                
                <div className="get-quote">
		            <div className="quote-title" id="getqt">
				<h1>Peça um orçamento: <br></br>
                 </h1>
				</div>

			<form data-testid="form"  className="form-inline" onSubmit={handleSubmit} >


				<div className="validate-input" data-validate = "Matricula is required">
					<input data-testid="form-name" label="matricula" className="input-box" type="text" id="mat" name="mat" placeholder="Matrícula" />
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" label="email" type="text" id="email" name="email" placeholder="Email" />
				</div>

				<div className="validate-input" data-validate = "Subject is required">
					<input className="input-box" label="subject" type="text" id="sub" name="sub" placeholder="Assunto"/>
				</div>

                <div className="validate-input" data-validate = "Part is required">
					<input className="input-box" label="Peça" type="text" id="part" name="part" placeholder="Peça" />
				</div>

                <div className="validate-input" data-validate = "State is required">
					<input className="input-box" label="Estado" type="text" id="pstate" name="pstate" placeholder="Novo / Reconstruído" />
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
