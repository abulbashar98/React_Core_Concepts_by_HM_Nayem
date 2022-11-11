
import React from "react";
import PropTypes from 'prop-types'


const InputAreaText = props => (

    <div className="form-group w-50 mx-auto">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className="form-control"
            name={props.name}
            type={props.type}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>

)

InputAreaText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

InputAreaText.defaultProps = {
    type: 'text',
    placeholder: '',
    value: ''
}

export default InputAreaText
