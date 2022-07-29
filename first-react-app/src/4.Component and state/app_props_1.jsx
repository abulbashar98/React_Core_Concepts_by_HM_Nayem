import React, { Component } from "react";
import Bio from "./profile/bio";
import Profile from './profile/profile'
import MyProps from "./props";
import Skills from "./profile/skills";

class App extends Component {

    render() {

        return (

            <div className='App'>
                <Profile />
                <Bio name="Testing Name" title="Testing Title" />
                <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <h3 style={{ marginBottom: '20px' }}>List of Programmers</h3>
                    <p>Mr: x</p>
                    <Skills skillA="React" skillB="Angular" skillC="Vue" />
                    <p>Mr: y</p>
                    <Skills skillA="Node.js" skillB="Express.js" skillC="MongoDB" />
                    <MyProps name="Abul Bashar" />
                    <MyProps name="Shegufa Tranjum" />
                    <MyProps name="Tushar Ahmed Khan" />
                </div>
            </div>

        );
    };
}

export default App;