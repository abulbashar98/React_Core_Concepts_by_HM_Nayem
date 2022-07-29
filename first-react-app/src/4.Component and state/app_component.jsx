import React from 'react'


// Definition: Javascript Class or Function that Returns JSX

/*-------------------------------- *\
    Two Types of Component in React
\*-----------------------------------*/

/**
 * 1.  Class Based Component / Stateful Component / Smart Component
 * 2. Functional Component / Stateless Component / Dumb Component
 */





//* Class Based Component */

class App extends React.Component {

    //******** Two Layers of A Component *****//

    // 1. Data and Logic Layer (optional)
    // 2. Representation Layer (Required)



    //******* Data and Logic Layer 

    /* 1. State
     * 2. Variables or Properties
     * 3. Functions or Methods
     * 4. Life Cycle Methods

    */

    //******** Representation Layer

    /** 
       5. JSX
    */

    render() {
        return <h1>Hello React, Now Working with index.js path correction</h1>
    }
}

export default App;




//* Functional Component */

// 1.
function myFunctionalComponent() {
    const name = 'ab';
    return <h3>Hello from react</h3>
}

// 2. 
const anotherFunctionalComponent = () => (<h5>Hello From Arrow Function Component</h5>);




