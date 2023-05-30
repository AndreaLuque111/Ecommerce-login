import React from 'react';
import ReactDom from 'react-dom/client';
import { Form } from './form';
import "./form.css"
import "./Register"
import { Register } from './Register';
import "./Register.css"
import './Firebase/confing'










ReactDom.createRoot(document.querySelector('#root')).render
    (
        <React.StrictMode>

            
            <Form/>
            <Register/>
        
        </React.StrictMode>

    )