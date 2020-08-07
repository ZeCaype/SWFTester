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
                <div className="hoverable">
                    <ReactSWF className="notClickable" src="./swf/map.swf" width="400" height="250"
                              flashVars={"swf_url=/map.swf&lang=fr&p=17&v=8388607"}
                              allowScriptAccess="never"
                              allowNetworking="never"

                    />
                </div>

                <div className="hoverable">
                <ReactSWF className="notClickable" src="./swf/map.swf" width="400" height="250"
                          flashVars={"swf_url=/map.swf&lang=en&p=0&v=8388607"}
                          allowScriptAccess="never"
                />
                </div>
            </div>

            <div>
                SWF Fusion et Sacrifices :
                <br></br>
                Ici, les flashVars nous permettent de choisir l'apparence des Dinoz fusionnés via des codes Hexadécimaux de 20 caractère ou plus:
                <br></br>
                <ReactSWF className="swf" src="/swf/loader.swf" width="400" height="200"
                          flashVars={"swf_url=/swf/fusion.swf?$version=null&lang=en&infos=DzB9F1ILfoCZ42345#:D7y4AcVKwHV3CX4t12345:D7B4FcVKfHVZ4X12345#&dinozUrl=/swf/dino.swf"}
                          wmode="transparent"
                          scale="noscale"
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
                <ReactSWF className="swf"
                          src="./swf/fight.swf" width="400" height="250"
                          flashVars={"swf_url=/fight.swf?$version=15&lang=fr" +
                          "&r=5238u2udj2j3udSFSDGSDG#:F2782j8d7832fSGSEDGSG" +
                          ":LeSombre:LeOuistiti" +
                          ":31:32:50:25:0:1:10:1:10:2:3:30:0:12:4:2:5:1:1" +
                          ":Bats-toi !:Bats-toi !" +
                          ":Gloups...:Gloups..." +
                          "&dino_url=/swf/dino.swf"}
                          allowScriptAccess="never"
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