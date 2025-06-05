import React from 'react';
import ReactDOM from 'react-dom';

function Portaldemo(){
    return (
        ReactDOM.createPortal(
            
            <h1>Poratal_demo</h1>,


            document.getElementById("Portal-root")
            

        )
    )
}
export default Portaldemo