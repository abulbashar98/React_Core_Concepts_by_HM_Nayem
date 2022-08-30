import React from "react";
import classes from './app.module.css'


class App extends React.Component {

    state = {
        name: ''
    }


    handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
    }

    handleEventChange = event => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        console.log(this.state)
    }
    handleCheckChange = event => {
        this.setState({ name: event.target.value })
        console.log(event.target.values)
    }

    handleFocusEvent = event => {
        console.log('Focus Event happened with onFocus Handler')
    }

    handleBlurEvent = () => {
        if (!this.state.name) {
            alert('Please input your name')
        }
        console.log('Blur event happened with onBlur event handler')
    }


    render() {

        return (
            <div>
                <h1>Handling Events In React</h1>
                <button className={classes.btn} onClick={this.handleButtonClick}>Click me</button>
                <br />
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Some Text, I can read Changes"
                    className={classes.textField}
                    onChange={this.handleEventChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="checking module"
                    className={classes.CheckStyle}
                    onChange={this.handleCheckChange}
                    onFocus={this.handleFocusEvent}
                    onBlur={this.handleBlurEvent}
                />
                <br />
                <br />
                {this.state.name && <h2>Welcome, {this.state.name}</h2>}

            </div>
        )

    }
}

export default App;