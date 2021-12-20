import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/body/GlobalStyles.jsx';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"


ReactDOM.render(
 
  <React.StrictMode>
   <GlobalStyles/>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

