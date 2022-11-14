
import React from "react";
import Board from "./board";



class Game extends React.Component {

    state = {

        history: [{ squares: Array(9).fill(null) }]

    }

    onClick = i => {
        console.log(i)
    }



    render() {

        return (
            <div>
                <h2>Game Component</h2>
                <Board
                    squares={this.state.history[0]}
                    onClick={this.onClick}
                />
            </div>
        )


    }


}

export default Game;