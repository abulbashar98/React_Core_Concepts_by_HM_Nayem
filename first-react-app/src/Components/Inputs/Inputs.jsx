import React from 'react'
import './inputs.css'


class App extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDate: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleCheckBox = event => {
        this.setState(
            {
                agree: event.target.checked
            }
        )
    }

    handleSkillChange = event => {

        if (event.target.checked) {
            this.setState(
                {
                    skills: [...this.state.skills, event.target.value]
                }
            )
        }
        else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState(
                {
                    skills: [...skills]
                }
            )
        }


    }




    render() {

        const { name, country, bio, birthDate, agree } = this.state;

        return (

            <div className='inputs-container'>
                <input
                    type="text"
                    name='name'
                    value={name}
                    placeholder='AB'
                    className='form-control my-5'
                    onChange={this.handleChange}
                />
                <select
                    name='country'
                    className='form-control my-5'
                    value={country}
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
                    value={bio}
                    placeholder='tell us about yourself'
                    className='form-control my-5'
                    onChange={this.handleChange}
                >
                </textarea>
                <input
                    type="date"
                    name='birthDate'
                    className='form-control my-5'
                    value={birthDate}
                    onChange={this.handleChange}
                />

                <div>
                    Gender:
                    <br />+-
                    k 9
                    <input
                        type="radio"
                        name='gender'
                        value="Male"
                        onChange={this.handleChange}
                    />
                    Male
                    <input
                        type="radio"
                        name='gender'
                        value="Female"
                        onChange={this.handleChange}
                    />
                    Female
                    <input
                        type="radio"
                        name='gender'
                        value="Other"
                        onChange={this.handleChange}
                    />
                    Other
                </div>
                <div>
                    Skills: <br />
                    <input
                        type="checkbox"
                        name='Skills'
                        value="Python"
                        checked={this.state.skills.includes("Python")}
                        onChange={this.handleSkillChange}
                    />
                    Python
                    <input
                        type="checkbox"
                        name='Skills'
                        value="Javascript"
                        checked={this.state.skills.includes("Javascript")}
                        onChange={this.handleSkillChange}
                    />
                    Javascript
                    <input
                        type="checkbox"
                        name='Skills'
                        value="C#"
                        checked={this.state.skills.includes("C#")}
                        onChange={this.handleSkillChange}
                    />
                    C#
                    <input
                        type="checkbox"
                        name='Skills'
                        value=".Net"
                        checked={this.state.skills.includes(".Net")}
                        onChange={this.handleSkillChange}
                    />
                    .Net
                    <input
                        type="checkbox"
                        name='Skills'
                        value="Java"
                        checked={this.state.skills.includes("Java")}
                        onChange={this.handleSkillChange}
                    />
                    Java
                </div>
                <div>
                    <input
                        type="checkbox"
                        name='agree'
                        checked={agree}
                        onChange={this.handleCheckBox}
                    />
                    Yes, I agree to all the terms and Conditions.
                </div>

                <button
                    className='btn btn-danger'
                    onClick={() => console.log(this.state)}
                // onClick={() => alert(this.state.name)}
                >
                    Show Changes
                </button>

            </div>


        );

    }

}

export default App; 