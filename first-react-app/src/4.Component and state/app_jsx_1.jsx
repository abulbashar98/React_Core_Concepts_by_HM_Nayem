import React, { Component } from "react";


class App extends Component {

    render() {

        // JSX is a sugar coating of HTML syntax.

        // What JSX actually does... Compiles this html syntax into JavaScript.

        // Example:

        return React.createElement('div', { className: "App" }, [
            React.createElement('h1', null, 'What is JSX'),
            React.createElement('p', null, 'JSX is awesome, It means JS Extension')
        ]
        );

        // Giving the Same Output in Browser



        // return (
        //     <div className='App'>
        //         <h1>What is JSX???</h1>
        //         <p>JSX is awesome, It meas JS Extension</p>
        //     </div>
        // );
    };
}

export default App;



// This dot Notation of React.create element shows that a Component is An Object. Like  React .....

// Example:
/*
const element = {

    type: 'div',
    props: {
        className: 'test',
        title: 'test me'
    },
    children: 'text node' | [h1, p, a, h4] | null

}
*/