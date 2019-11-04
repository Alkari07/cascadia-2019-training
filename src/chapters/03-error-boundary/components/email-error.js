import React from 'react';
import ErrorModal from './modal';

export default class EmailError extends React.Component { 
    
    state = {
        renderingError: false
    }

    static getDerivedStateFromError(error) {

        return {renderingError: true}
    }

    onClose () {
        this.setState({
            renderingError: false
        });
        
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error occured: ', error);
    }

    render() {
        if (this.state.renderingError) {
            console.log(this.props);
            return <ErrorModal onClose={this.onClose}></ErrorModal>
        }
        return this.props.children;
    }
}