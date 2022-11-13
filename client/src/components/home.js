import React,{useState}  from 'react';
import GetQuote from './CustomComponents/GetQuote/getquote';
import Modal from './CustomComponents/Modal/Modal';
import "../css/style.css"

const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const modal = () => {
        setShowModal(true);
    }

    return(
    <section className="split">
       
        <div className='campaign-body'>
                
                    <div className='left'>
                    <div className='centered'>
                        <h1 className="campaign-title"><b>PROMOÇÃO EM MOTORES<br></br> RECONSTRUÍDOS</b></h1>
                        <div className='list'>
                            <p>A Trust Motores oferece aos seus estimados clientes, <br></br> através da parceira com a GIFERMO
                            um preço especial<br></br> na reconstrução do seu motor automóvel.<br></br>
                            <b>*Válido até ao fim do mês de novembro* </b>
                            </p>
                        </div>

                        <button className='get-in-touch-button' onClick={modal}>Saber mais</button>
                        </div>
                    </div>
                    <div className='right '><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1667854926/My_project_1_nudtri.png"/></div>
			<GetQuote/>
            {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
            
        </div>
        
        
    </section>
    
    
    )
}
export default Home;
