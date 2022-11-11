import React from "react";
import PropTypes from 'prop-types'
import InputAreaText from "./ipnput-text-area";


const MyForm = props => (
    <form
        onSubmit={props.onSubmit}
    >
        <InputAreaText
            name="name"
            label="Your Name"
            placeholder="Abul Bashar"
            value={props.values.name}
            onChange={props.onChange}
        ></InputAreaText>
        <InputAreaText
            name="email"
            type="email"
            label="Your Email"
            placeholder="abc@example.com"
            value={props.values.email}
            onChange={props.onChange}
        ></InputAreaText>
        <InputAreaText
            name="password"
            label="Your Password"
            type="password"
            placeholder="********"
            value={props.values.password}
            onChange={props.onChange}
        ></InputAreaText>
        <input
            className="form-control bg-danger w-25 mx-auto"
            type="submit" />
    </form>
)

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MyForm;