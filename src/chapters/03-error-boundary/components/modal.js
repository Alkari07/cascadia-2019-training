import React from "react";
import ReactDOM from "react-dom";

const ErrorModal = (props) => (
    ReactDOM.createPortal((<div class='modal'>
        <h3>Email Error</h3>
        <button class='modal-close' onClick={props.onClose}>Close</button>
    </div>), 
    document.getElementById('modal-root'))
);

export default ErrorModal;