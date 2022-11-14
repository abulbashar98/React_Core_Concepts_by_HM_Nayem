import React from "react";
import MyForm from "./form";

const initialStateValue = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class SignUpForm extends React.Component {




    state = {

        values: initialStateValue,
        errors: {},
        agreement: false

    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
        // console.log(this.s9tate)
    }

    handleSubmit = event => {
        event.preventDefault()

        const { errors, isValid } = this.validate();
        console.log(isValid)

        if (isValid) {
            this.props.createUser(this.state.values)
            event.target.reset()
            this.setState({ values: initialStateValue, errors, agreement: false })
            console.log(this.state)
        }

        else {
            console.log(errors);
            this.setState({
                errors
            })
        }
        // setTimeout(() => {
        //     console.log(this.state)
        // }, 1000)
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }


    validate = () => {

        const errors = {}

        const { values: { name, email, password, birthDate, gender } } = this.state;

        if (!name) {
            errors.name = "Please Provide your Name"
        }
        if (!email) {
            errors.email = "Please Provide your Email"
        }
        if (!password) {
            errors.password = "Please Provide your Password"
        }
        if (!birthDate) {
            errors.birthDate = "Please Provide your BirthDate"
        }
        if (!gender) {
            errors.gender = "Please Select your Gender"
        }

        const isValid = Object.keys(errors).length === 0;

        console.log(Object.keys(errors));

        console.log(isValid);

        return {
            errors,
            isValid
        }


    }

    render() {

        return (
            <div>
                <h1 className="fw-bold text-center">SignUp Form </h1>
                <MyForm
                    values={this.state.values}
                    errors={this.state.errors}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAgreement={this.handleAgreement}
                ></MyForm>
            </div>
        )

    }


}

export default SignUpForm;