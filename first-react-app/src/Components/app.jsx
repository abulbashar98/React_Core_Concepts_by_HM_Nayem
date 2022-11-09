import React from 'react';
import Controlled from './Inputs/controlled';
import Uncontrolled from './Inputs/uncontrolled';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{ color: 'red', textAlign: 'center' }}>Working with Inputs and Forms</h1>
                <hr />
                {/* <Inputs></Inputs> */}
                {/* <Uncontrolled></Uncontrolled> */}
                <Controlled></Controlled>

            </div>


        );

    }

}

export default App;