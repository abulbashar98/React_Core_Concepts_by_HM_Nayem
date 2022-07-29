
import React from "react";
import './profile.css'
import Bio from './bio'
import Skills from './skills'
import Links from './links'


class Profile extends React.Component {

    me = {

        name: 'Abul Bashar',
        title: 'Student, Bachelor of Engineering, Information Technology  and Front End Developer',

        skillA: 'JavaScript',
        skillB: 'React',
        skillC: 'Firebase Auth',

    }

    render() {
        // console.log('My Props- ', this.props)
        return (
            <div className="Container">
                <Bio name={this.me.name} title={this.me.title} />
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} />
                <Links />
            </div>

        );


    }


}

export default Profile;
