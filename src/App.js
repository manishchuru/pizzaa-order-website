import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navroute from './Route';
import {FiInstagram} from 'react-icons/fi';
import {GrFacebookOption} from 'react-icons/gr';
import {FiTwitter} from 'react-icons/fi';
import {ImWhatsapp} from 'react-icons/im';
import "./App.css";
const App = () => {
    return (
        <div>
     <Navroute/>
      <div className="foter">
     
        <FiInstagram id='insta'/>
        <GrFacebookOption  id='face'/>
        <FiTwitter id='twi'/>
        <ImWhatsapp id='what'/>
 
        </div>
    </div>
   );
}

export default App;
