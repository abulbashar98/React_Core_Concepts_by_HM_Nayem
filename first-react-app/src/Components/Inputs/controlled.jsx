import React from "react";


class Controlled extends React.Component {

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
        // console.dir(event.target)
        // console.log(event.target.name.value)

        // const data = {};

        // data.name = event.target.name.value
        // data.email = event.target.email.value
        // data.password = event.target.password.value

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

        const { name, email, password } = this.state;

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        className="form-control w-50 mx-auto"
                        type="text"
                        name="name"
                        placeholder="your name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-control w-50 mx-auto"
                        type="email"
                        name="email"
                        placeholder="your email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-control w-50 mx-auto"
                        type="password"
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-control bg-danger w-25 mx-auto"
                        type="submit" />
                </form>
            </div>
        )

    }

};

export default Controlled;