import React from 'react';
import Inputs from './Inputs/Inputs'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{ color: 'red', textAlign: 'center' }}>Working with Inputs and Forms</h1>
                <hr />
                <Inputs></Inputs>
            </div>


        );

    }

}

export default App;