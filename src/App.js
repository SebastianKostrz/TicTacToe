import './App.css';
import Board from "./components/Board/Board";
import {useEffect, useState} from "react";
import StartingScreen from "./components/StartingScreen/StartingScreen";
import EndScreen from "./components/EndScreen/EndScreen";

function App() {
    const [turn, setTurn] = useState("circle")
    const [playerFigure, setPlayerFigure] = useState("cross")
    const [figures, setFigures] = useState(["", "", "", "", "", "", "", "", ""])
    const [winner, setWinner] = useState(false);
    const [gameMode, setGameMode] = useState("");
    const [componentToDisplay, setComponentToDisplay] = useState("starting-screen");
    const [endScreenAnimation, setEndScreenAnimation] = useState("slide-in-animation");
    const [gamesResults, setGamesResults] = useState({
        won: 0,
        tied: 0,
        lost: 0
    });

    const quitGame = () => {
        setGameMode("");
        setWinner(false);
        setTurn("circle")
        setFigures(["", "", "", "", "", "", "", "", ""])
        setPlayerFigure("cross")

        setComponentToDisplay("starting-screen")
    }

    const restartGame = () => {
        setTurn("circle")
        setFigures(["", "", "", "", "", "", "", "", ""])
        setWinner(false);
        setEndScreenAnimation("slide-out-animation");
        setTimeout(() => {
            setComponentToDisplay("game-board");
            setEndScreenAnimation("slide-in-animation");

        }, 300)



    }

    const cpuTurn = () => {
        if (turn !== playerFigure && gameMode === "cpu" && winner === false) {
            let randomIndex;
            let updatedFigures;

            do {

                randomIndex = Math.floor(Math.random() * 10);

            } while (figures[randomIndex] !== "")
            setTurn(turn === "cross" ? "circle" : "cross");
            updatedFigures = [...figures];  // Create a copy of the current figures array
            updatedFigures[randomIndex] = playerFigure === "cross" ? "circle" : "cross";  // Update the copy
            setFigures(updatedFigures);  // Update the state with the new array
        }
    }

    useEffect(() => {
        if (figures.every(figure => figure === "") && playerFigure !== "circle") {
            cpuTurn()
        } else {
            setTimeout(() => {
                cpuTurn()
            }, 500)
        }


    }, [turn, gameMode]);

    useEffect(() => {
        if (winner !== false) {
            if (winner === 'tie') {
                setGamesResults({...gamesResults, tied: gamesResults.tied + 1})
            } else if (winner === playerFigure) {
                setGamesResults({...gamesResults, won: gamesResults.won + 1})
            } else if (winner !== playerFigure) {
                setGamesResults({...gamesResults, lost: gamesResults.lost + 1})
            }
        }
    }, [winner]);

    return (
        <div className="App">
            {componentToDisplay === 'end-screen' ?
                <EndScreen winner={winner} playerFigure={playerFigure} quitGame={quitGame}
                           restartGame={restartGame} componentToDisplay={componentToDisplay}
                           endScreenAnimation={endScreenAnimation}/> : null}
            {componentToDisplay === "starting-screen" ?
                <StartingScreen playerFigure={playerFigure} setPlayerFigure={setPlayerFigure} setTurn={setTurn}
                                turn={turn} setGameMode={setGameMode} setComponentToDisplay={setComponentToDisplay}
                                gameMode={gameMode}/> :
                <Board key={'board'} turn={turn} setTurn={setTurn} figures={figures} setFigures={setFigures}
                       winner={winner} setWinner={setWinner} playerFigure={playerFigure}
                       gamesResults={gamesResults} setGamesResults={setGamesResults}
                       setComponentToDisplay={setComponentToDisplay}/>
            }
        </div>
    );
}

export default App;
