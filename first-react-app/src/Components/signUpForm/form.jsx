import React from "react";
import PropTypes from 'prop-types'
import InputAreaText from "./input-text-area";


const MyForm = ({ values, agreement, handleChange, handleSubmit, handleAgreement, errors }) => (




    < div >
        <form
            onSubmit={handleSubmit}
        >
            <InputAreaText
                name="name"
                label="Name"
                type="text"
                className="form-group"
                placeholder="type your name here"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
            ></InputAreaText>
            <InputAreaText
                name="email"
                type="email"
                label="Email"
                className="form-group"
                placeholder="type your email here"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            ></InputAreaText>
            <InputAreaText
                name="password"
                type="password"
                label="Password"
                className="form-group"
                placeholder="type your password here"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
            ></InputAreaText>
            <InputAreaText
                name="birthDate"
                type="date"
                label="BirthDate"
                className="form-group"
                value={values.birthDate}
                onChange={handleChange}
                error={errors.birthDate}
            ></InputAreaText>



            <div className="form-group w-50 mt-3">
                <label className="me-2">
                    <input className="form-group me-2" name="gender" type="radio" value="male" onChange={handleChange} />
                    Male
                </label>

                <label className="me-2">
                    <input className="form-group me-2" name="gender" type="radio" value="female" onChange={handleChange} />
                    Female
                </label>
                <label className="me-2">
                    <input className="form-group me-2" name="gender" type="radio" value="other" onChange={handleChange} />
                    Other
                </label>
                {errors && <div className="text-danger">{errors.gender}</div>}
            </div>

            <div className="form-group w-50">
                <label className="">
                    <input className="form-group me-2" name="agreement" type="checkbox" checked={agreement} onChange={handleAgreement} />
                    I agree to all the terms and conditions
                </label>
            </div>
            <div className="w-50 my-3">
                <button
                    type="submit"
                    disabled={!agreement}
                    className="btn btn-primary align-items-center"
                >
                    SignUp
                </button>
            </div>
        </form>
    </div >

)

MyForm.propTypes = {

    value: PropTypes.string,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired

}

export default MyForm;