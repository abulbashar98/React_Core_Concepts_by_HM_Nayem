
import React from "react";
import Board from "./board";


function calculateWinner(squares) {
    return
}


class Game extends React.Component {

    state = {
        history: [{ squares: Array(9).fill(null) }],
        stepCount: 0,
        xIsNext: true
    }

    handleClick = i => {
        const history = this.state.history.slice(0, (this.stepCount + 1))
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calculateWinner(squares) || squares[i]) {
            return
        }

        squares[i] = this.state.xIsNext ? "X" : "O"

        this.setState({
            history: history.concat([{ squares }]),
            stepCount: history.length,
            xIsNext: !this.state.xIsNext
        })

    }


    render() {

        return (
            <div>
                <h2>Game Component</h2>
                <Board
                    squares={this.state.history[0]}
                    onClick={this.handleClick}
                />
            </div>
        )


    }


}

export default Game;