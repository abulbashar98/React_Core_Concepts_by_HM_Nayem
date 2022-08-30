import React from 'react'
import './inputs.css'


class App extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDate: ''
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    render() {

        return (

            <div className='inputs-container'>
                <input
                    type="text"
                    name='name'
                    placeholder='AB'
                    className='form-control my-5'
                    onChange={this.handleChange}
                />
                <select
                    name='country'
                    className='form-control my-5'
                    onChange={this.handleChange}
                >
                    <option>Select One</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Nepal">Nepal</option>
                    <option value="China">China</option>
                </select>
                <textarea
                    name="bio"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder='tell us about yourself'
                    className='form-control my-5'
                    onChange={this.handleChange}
                >
                </textarea>
                <input
                    type="date"
                    name='birthDate'
                    className='form-control my-5'
                    onChange={this.handleChange}
                />
                <button
                    className='btn btn-danger'
                    onClick={() => console.log(this.state)}
                >
                    Show Changes
                </button>

            </div>


        );

    }

}

export default App;