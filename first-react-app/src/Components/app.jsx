import React, { Component } from "react";


class App extends Component {

    // // es5 declaration of properties and State
    // constructor(props) {
    //     super(props)
    //     this.count = 0

    //     this.state = {
    //         count: 0
    //     }
    // }

    //es6 Declaration of properties and State

    count = 0;
    state = {
        count: 0
    }

    render() {
        console.log(this.count)
        return (
            <div className="App">
                <h1>Why do we need State???</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    // this.count++
                    this.setState({ count: this.state.count + 1 })
                    console.log(this.state.count + 1, "clicked")
                }}> Increment Count </button>
            </div>
        )

    }
}


export default App;