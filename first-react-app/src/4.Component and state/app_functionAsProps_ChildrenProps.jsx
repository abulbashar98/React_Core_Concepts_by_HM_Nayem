import React from "react";



class Child extends React.Component {

    render() {
        this.props.func(this)
        return <h1>I am Child</h1>

    }

}

const ChildrenComponent = (props) => {

    return (
        <div>
            <h1>Hello I am Children Component</h1>
            <h4>I have Two Children with My Parents</h4>
            {props.children}
        </div >
    );

}



class App extends React.Component {

    getContext(context) {
        console.log(context)
    }
    render() {
        this.getContext(this)
        return (
            <div className="App">
                <h1>Pass Function as Props</h1>
                {/* <Child func={this.getContext} /> */}
                <ChildrenComponent>
                    <h1>Hello, We are child of Children Component</h1>
                    <h4>We are from Parent App Component</h4>
                </ChildrenComponent>
            </div>
        );
    }


};

export default App;