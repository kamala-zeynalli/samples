import React, {Component} from 'react';
import Head from './Head';
import Form from './Form';
import {LanguageProvider} from "./LanguageContext";
import pho from "./image/app.jpg"
class App extends Component{
 render() {
   return(
      <div>
      {/* <img src={pho} width="200" height="200"/> */}
      <LanguageProvider>
         <Head/>
         <Form
         >
            
         </Form>
      </LanguageProvider>
       
      </div>
   )
 }
}

export default App;
