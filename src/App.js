import React from 'react';
import './App.css';
import 'react-swf';

function App() {
    var ReactSWF = require('react-swf');
    return (
        <div className="App">
            <div>Voici une page de test pour les différents fichiers SWF et leurs flashVars internes :</div>
            <br></br>
            <div>
                SWF Dinoz :
                <br></br>
                Ici, les flashVars nous permettent de choisir l'apparence du Dinoz via un code Hexadécimal de 20 caractère ou plus:
                <br></br>
                <ReactSWF className="swfDinoz" src="./swf/dino.swf" width="100" height="100"
                          flashVars={"swf_url=/dino.swf?$version=14&data=7WFJ982WF98J98AY877A78"}
                />

                <ReactSWF className="swfDinoz" src="./swf/dino.swf" width="100" height="100"
                          flashVars={"swf_url=/dino.swf?$version=14&data=D34G898398298F89"}
                />
            </div>

            <div>
                SWF Maps :
                <br></br>
                Ici, les flashVars nous permettent de choisir l'emplacement pointé par le rond orange :
                <br></br>
                <ReactSWF className="swf" src="./swf/map.swf" width="400" height="250"
                          flashVars={"swf_url=/map.swf&lang=fr&p=17&v=8388607"}
                />

                <ReactSWF className="swf" src="./swf/map.swf" width="400" height="250"
                          flashVars={"swf_url=/map.swf&lang=en&p=0&v=8388607"}
                />
            </div>

            <div>
                SWF Fusion et Sacrifices :
                <br></br>
                Ici, les flashVars nous permettent de choisir l'apparence des Dinoz fusionnés via des codes Hexadécimaux de 20 caractère ou plus:
                <br></br>
                <ReactSWF className="swf" src="./swf/fusion.swf" width="400" height="200"
                          flashVars={"swf_url=/fusion.swf"}
                />

                <ReactSWF className="swf" src="./swf/sacrifice.swf" width="400" height="200"
                          flashVars={"swf_url=/sacrifice.swf&v=35"}
                />
            </div>

            <div>
                SWF Combats :
                <br></br>
                Ici, les flashVars nous permettent de choisir l'apparence des Dinoz en combat ainsi que toutes leurs stats (valeurs de leurs éléments):
                <br></br>
                Attention!!! Ce SWF force un ''page-refresh'' quand le combat est terminé... Ceci pose problème dans le re-make de Dinoparc...
                <br></br>
                <ReactSWF className="swf"
                          src="./swf/fight.swf" width="400" height="250"
                          flashVars={"swf_url=/fight.swf?$version=15&lang=fr" +
                          "&r=5238u2udj2j3udSFSDGSDG#:F2782j8d7832fSGSEDGSG" +
                          ":LeSombre:LeOuistiti" +
                          ":40:38:30:30:121:114:244:0:30:99:91:2:0:0:82:84:40:0:9" +
                          ":Bats-toi !:Tu vas connaitre ma puissance !" +
                          ":Ouille ! ouille ouille !:Ce n'est qu'un au revoir...&dino_url=/swf/dino.swf"}
                />
            </div>

            <div>
                Autres SWF :
                <br></br>
                <ReactSWF className="swf" src="./swf/marchand.swf" width="200" height="200"/>

                <br></br>
                <ReactSWF className="swf" src="./swf/prophete.swf" width="200" height="200"/>
            </div>
        </div>
    );
}

export default App;