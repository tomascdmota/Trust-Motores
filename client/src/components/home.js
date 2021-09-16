import React,{Component}  from 'react';
import GetQuote from './getquote';

class Home extends Component {

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


        // Defining vars for the cascading dropdown

       this.state = {
           DDL1: [],
           DDL2: [],
           selectDDL: ''
       }
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}



    componentDidMount() {
        this.setState({
            DDL1:[
                 {name: 'Motor', DDL2: ['Novo', 'Reconstruído']},
                 {name: 'Caixa de velocidades', DDL2: ['Nova', 'Reconstruída']},
                 {name: 'Turbo', DDL2:['Novo', 'Reconstruído']},
                 {name: 'Injetor',  DDL2: ['Novo', 'Reconstruído']},
                 {name: 'Reparação / Orçamento', DDL2: ['Motor', 'Caixa de velocidades', 'Turbo']}
            ]
        })
    }

    selectChange(e) {
        this.setState({selectDDL: e.target.value});
        this.setState({DDL2: this.state.DDL1.find( x=> x.name === e.target.value).DDL2});
    }

    render() {
    return(
    <section className="home">
        <div className='home-row'>
                
                
                <div className="get-quote">
		            <div className="quote-title" id="getqt">
				<h1>Peça um orçamento: <br></br>
                 </h1>
				</div>

			<form data-testid="form"  className="form-inline" onSubmit={this.handleSubmit} >


				<div className="validate-input" data-validate = "Matricula is required">
					<input data-testid="form-name" label="matricula" className="input-box" type="text" id="name" name="matricula" placeholder="Matrícula" value={this.state.name} onChange={this.handleChange}/>
				</div>

				<div className="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input-box" label="email" type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
				</div>

				<div className="validate-input" data-validate = "Subject is required">
					<input className="input-box" label="subject" type="text" id="subject" name="subject" placeholder="Assunto" value={this.state.subject} onChange={this.handleChange}/>
				</div>

                <select value={this.state.selectDDL} label="peça" onChange={this.selectChange.bind(this)}>
                    <option value=""  >Peça</option>
                    {this.state.DDL1.map( x=> {
                        return <option>{x.name}</option>

                    })}
                </select>

                <select key="value" label="value">
                    <option value="">-------</option>
                    {this.state.DDL2.map(x=>{
                        return <option>{x}</option>
                    })}
                </select>


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
            
        </div>

        
    </section>
    
    
    )
}
}

export default Home;
