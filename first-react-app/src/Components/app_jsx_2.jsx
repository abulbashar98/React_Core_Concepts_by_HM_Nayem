import React, { Component } from "react";


class App extends Component {

    render() {

        // 4
        const MyCustomComponent = () => <h3>My Custom Component</h3>;

        // 5.2 attribute in Obj
        const attributeObj = {
            title: 'Test Title from OBj',
            id: '01'
        }

        // 7. 

        const name = "Abul Bashar";

        const bio = (
            <div>
                <h4>{name}</h4>
                <p>Student of Vassa University of Applied Sciences</p>
            </div>
        );
        return (

            <div className='App'>
                < h1 title="Test Title"> How to Use JSX ???</h1 >
                <p {...attributeObj}>Few Ways To USE JSX</p>
                <p>{new Date().toISOString()}</p>
                <p>My name is: {name}</p>
                {bio}
                <ol>
                    <li>  To use JSX in a file, React must ber imported</li>
                    <li>There can only be one root element, No Siblings</li>
                    <li>We can use dot notation in JSX, Like React.Fragment. No attributes allowed with fragment. Shorthand = Empty Tags </li>
                    <li>We can use a Custom Component as JSX with children or without children. To Distinguish the Custom Component frm HTML Element , Custom Component must be Declared With A Capital Letter</li>
                    <li>We can use Any Attribute with JSX, Can declare an object of attribute and use that as a JS code in JSX with Curly Brackets</li>
                    <li>Any Single Statement JS code Can be executed in JSX, using Curly Brackets</li>
                    <li>Example: a Variable name</li>
                    <li>We Can Store JSX in a variable, then use it.As JSX is a JS statement</li>
                </ol>
                <MyCustomComponent />
            </div>

            /*
                                    // 3.1 fragment with dot notation, no attribute applies
                        
                                    <React.Fragment className="App">
                                        < h1 > How to Use JSX ???</h1 >
                                        <p>Few Ways To USE JSX</p>
                                    </ React.Fragment>
                        */

            /*
            // 3.2 Fragment Shorthand, When we don't want a div to be a root element. Still no attribute 

            <>
                < h1 > How to Use JSX ???</h1 >
                <p>Few Ways To USE JSX</p>

            </>
          */
            /*
                                   // 2. not allowed, 
                       
                                   // <div></div>
                       
                                   // To Understand the Reason Behind This we can See the 
                                   // Previous jsx_1 file, from return we can see a Single
                                   // React.createElement,Surely can hold as many children
                                   // as we want, But Root Element can't have a sibling 
                       */

        );
    };
}

export default App;