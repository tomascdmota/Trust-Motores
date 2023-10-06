import React from 'react';
import './Services.css'
import Card from "../CustomComponents/Card/Card.js";
import Navigation from "../CustomComponents/Nav/Nav.js";

function Services() {
   

         
        return(
        <div>
            <Navigation/>
            <div className="container-tabs">
                <div className="feature-title">
                    <h1>OS NOSSOS SERVIÇOS</h1>
                    
                </div>

                <div className="content-tabs">
                
                <Card 
                    title="Motores"
                    imageUrl="https://res.cloudinary.com/dnho57ne8/image/upload/v1668448143/iu_nkd2pb_c4nnve.avif"
                    body="A Trust Motores comercializa motores novos e reconstruídos, sempre com 12 meses de garantia sem limite de kms."/>

                <Card 
                    title="Caixas De Velocidades"
                    imageUrl="https://res.cloudinary.com/dnho57ne8/image/upload/v1668448109/mechanical-gearbox-cross-section-helical-gear-closeup-picture-id1180360844_btqws1_h9mceq.avif"
                    body="A Trust Motores comercializa caixas de velocidades automáticas e manuais, novas e reconstruídas, também com 12 meses de garantia"/>

                <Card 
                    title="Injetores / Turbos"
                    imageUrl="https://res.cloudinary.com/dnho57ne8/image/upload/v1668448114/iu_grroqm_yxax64.avif"
                    body="A Trust Motores comercializa injetores e turbos, novos e reconstruídos, sempre com 12 meses de garantia
                    para lhe poder oferecer o melhor serviço com a melhor qualidade."/>
                      <Card 
                    title="Reconstrução de Motores"
                    imageUrl="https://res.cloudinary.com/dnho57ne8/image/upload/v1668448140/iu_hqalvw_tn0v3g.avif"
                    body="Com uma incrivel parceria com a GIFERMO, orgulhamo-nos de poder oferecer um serviço de rescontrução e recuperação
                    de motores aos nossos estimados clientes."/>
                   
                </div>
                <div className='advisor'><p>* Todos os serviços estao sujeitos a 12 meses de garantia, sem limite de kms.</p></div>
            

            </div>
            </div>
        );
    };

export default Services;