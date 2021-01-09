import React, {Component} from 'react';
import Head from './Head';
import Form from './Form';
import {LanguageProvider} from "./LanguageContext";

class App extends Component{
 render() {
   return(
      <div>
      <LanguageProvider>
         <Head/>
         <Form/>
      </LanguageProvider>
       
      </div>
   )
 }
}

export default App;
