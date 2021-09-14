import React, {Component, useState} from 'react';
import '../css/features.css'
import Motores from './featuresComponents/featuresmotores';
import Caixas from './featuresComponents/featurescaixas';
import Tei from './featuresComponents/featurestei';

function Features() {
   

        const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
          };
    

        return(
            <div className="container-tabs">
                <div className="feature-title">
                    <h1>SERVIÇOS</h1>
                </div>
                <div className="bloc-tabs">
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Motores</button>
                    <button className={ toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Caixas De Velocidades</button>
                    <button className={ toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Turbos e Injetores</button>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <Motores/>

                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Caixas/>
                    </div>

                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <Tei/>
                    </div>

                   
                </div>
            

            </div>
        );
    };

export default Features;