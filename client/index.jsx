import React, { Component } from 'react';
import { render } from 'react-dom';
import RSVPForm from '../components/RSVPForm';

class App extends Component {
    render() {
        return (
            <div>
                <RSVPForm />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));