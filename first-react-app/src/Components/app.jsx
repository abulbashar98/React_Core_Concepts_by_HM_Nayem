import React from 'react';
import Controlled from './Inputs/controlled';
import Uncontrolled from './Inputs/uncontrolled';
import SignUpForm from './signUpForm';
import SplitForm from './split-form/split-form';


class App extends React.Component {

    state = {

        users: []

    }

    createUser = user => {



        this.setState({

            users: [...this.state.users, user]
        })

    }



    render() {
        return (
            <div>
                <h1 style={{ color: 'red', textAlign: 'center' }}>Working with Inputs and Forms</h1>
                <hr />
                {/* <Inputs></Inputs> */}
                {/* <Uncontrolled></Uncontrolled> */}
                {/* <Controlled></Controlled> */}
                {/* <SplitForm></SplitForm> */}
                <SignUpForm
                    createUser={this.createUser}
                ></SignUpForm>


                <div className='w-50 mx auto my-5'>
                    <h1 className='text-center'>Recently Registered Users</h1>
                    <ul>{this.state.users.map(user => <li key={user.id} className="list-group-item">{user.name} {user.email} {user.gender}</li>)}</ul>
                </div>


            </div>



        );

    }

}

export default App;