import React from "react";



const MyProps = (props) => {
    console.log('My Props- ', props.name)
    return <h1>My name is {props.name}</h1>;


}



export default MyProps;