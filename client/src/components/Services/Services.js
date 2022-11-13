import React, {useState} from 'react';
import './Services.css'
import Card from '../CustomComponents/Card/Card';

function Services() {
   

         
        return(
            <div className="container-tabs">
                <div className="feature-title">
                    <h1>OS NOSSOS SERVIÇOS</h1>
                    
                </div>
                
                

                <div className="content-tabs">
                
                <Card 
                    title="Motores"
                    imageUrl="https://www.wallpaperbetter.com/wallpaper/834/426/508/pistons-engine-hd-720P-wallpaper.jpg"
                    body="A Trust Motores comercializa motores novos e reconstruídos, sempre com 12 meses de garantia sem limite de kms."/>

                <Card 
                    title="Caixas De Velocidades"
                    imageUrl="https://media.istockphoto.com/photos/mechanical-gearbox-cross-section-helical-gear-closeup-picture-id1180360844?k=6&m=1180360844&s=170667a&w=0&h=6lMXN6B4k0VOsQtF3JHa7NXk6Wfx3WdmHqqQvMsAobA="
                    body="A Trust Motores comercializa caixas de velocidades automáticas e manuais, novas e reconstruídas, também com 12 meses de garantia"/>

                <Card 
                    title="Injetores / Turbos"
                    imageUrl="http://img-new.cgtrader.com/items/38739/turbocharger_3d_model_obj_blend_b5c88de5-a520-4f85-9de9-ac3ccff7a78e.png"
                    body="A Trust Motores comercializa injetores e turbos, novos e reconstruídos, sempre com 12 meses de garantia
                    para lhe poder oferecer o melhor serviço com a melhor qualidade."/>
                      <Card 
                    title="Reconstrução de Motores"
                    imageUrl="https://wonderfulengineering.com/wp-content/uploads/2013/12/engine-wallpaper-5.jpg"
                    body="Com uma incrivel parceria com a GIFERMO, orgulhamo-nos de poder oferecer um serviço de rescontrução e recuperação
                    de motores aos nossos estimados clientes."/>
                   
                </div>
                <div className='advisor'><p>* Todos os serviços estao sujeitos 12 meses de garantia sem limite de kms.</p></div>
            

            </div>
        );
    };

export default Services;