
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; 
import ShopContext from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ShopContext>
      <App />
    </ShopContext>
      
    </BrowserRouter>
  
);
