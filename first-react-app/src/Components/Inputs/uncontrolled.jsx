import React from "react";


class uncontrolled extends React.Component {


    handleSubmit = event => {

        event.preventDefault();
        // console.dir(event.target)
        // console.log(event.target.name.value)

        const data = {};

        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(data);

        event.target.reset();

    }


    render() {

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
                    />
                    <input
                        className="form-control w-50 mx-auto"
                        type="email"
                        name="email"
                        placeholder="your email"
                    />
                    <input
                        className="form-control w-50 mx-auto"
                        type="password"
                        name="password"
                        placeholder="******"
                    />
                    <input
                        className="form-control bg-danger w-25 mx-auto"
                        type="submit" />
                </form>
            </div>
        )

    }

};

export default uncontrolled;