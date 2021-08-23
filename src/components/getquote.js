import React, {Component} from 'react'
import '../css/getquote.css';
import axios from 'axios';

class getquote extends Component {
	constructor(){
		super()

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			sent:false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()
		const {name, email, subject, message} = this.state;

		const form = await axios.post('/api/form', {
			name, 
			email,
			subject,
			message
		});
	};
	

 render() {
    return (
        <div>
		

			<form data-testid="form"  className="form-inline" onSubmit={this.handleSubmit} >
				<span className="quote-title">
				<h3>Entre em contacto connosco:</h3>	
				</span>

				<div className="validate-input" data-validate = "Matricula is required">
					<input data-testid="form-name" className="input-box" type="text" id="name" name="matricula" placeholder="Matrícula" value={this.state.name} onChange={this.handleChange}/>
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
				</div>

				<div className="validate-input" data-validate = "Subject is required">
					<input className="input-box" type="text" id="subject" name="subject" placeholder="Assunto" value={this.state.subject} onChange={this.handleChange}/>
				</div>


				<div className="container-contact1-form-btn">
					<div className={this.state.sent ? 'msg msgAppear': 'msg'}></div>
					<button data-testid="contact-button" type="submit" id="submit" className="contact1-form-btn" >
						<span>
							Enviar
						</span>
					</button>
				</div>
			</form>
		</div>
    )
	}
}

export default getquote;
