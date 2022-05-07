import React from 'react';
import './ErrorModel.css';
import ReactDOM from 'react-dom';
const Backdrop = (props)=>{
    return <div className='oh'></div>;
};
const ModalOverlay = (props)=>{
    return ( <div className='check'>
                <header>
                    <span>{props.title}</span>
                </header>
                <p>{props.message}</p>
                <footer>    
                    <button onClick = {props.onError}>Okay</button>
                 </footer>
             </div>);
}
//ReactDOM is just name imported form react-dom so e can use portals
//creatPortal(Node,pointer) take two args first is ReactNode which is jsx so it should be writen in </>
//another is pointer to where it should be ported which can be done through .getElementById() which is an API
//this portal method is similar to render method  in index.js file
const ErrorModel = (props)=>{
    return (        
        <>
           {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
           {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onError={props.onError} />,document.getElementById('overlay-root'))}         
        </>
    ); 
}
export default ErrorModel;