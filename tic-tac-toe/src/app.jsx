import React from "react";
import './App.css'
import Game from "./components/game";


class App extends React.Component {

    render() {

        return (
            <div className="app">
                <h1>Tic Tac Toe</h1>
                <Game></Game>
            </div>
        )


    }


}

export default App;