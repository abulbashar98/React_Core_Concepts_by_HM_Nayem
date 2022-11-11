
import React from "react";
import MyForm from "./form";



class SplitMyForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = event => {

        event.preventDefault();


        console.log(this.state);
        event.target.reset();
        this.setState(
            {
                name: '',
                email: '',
                password: ''
            }
        )

    }



    render() {

        return (
            <div>
                <MyForm
                    onSubmit={this.handleSubmit}
                    values={this.state}
                    onChange={this.handleChange}
                ></MyForm>
            </div>
        )

    }

};

export default SplitMyForm;