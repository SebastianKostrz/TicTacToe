import './EndScreen.css';
import {useState} from "react";

export default function EndScreen({winner, playerFigure, quitGame, restartGame,endScreenAnimation}) {



    return <div id='end-screen-container' >
        <div id='end-screen-bar' className={endScreenAnimation}>
            {winner !== 'tie' ?
                <>
                <span id='result-label'>
                {winner == playerFigure ? "YOU WON!" : "OPONNENT WON!"}
            </span>
                    <span id='winner-label' style={{color: winner == 'circle' ? "#F2B137" : "#31C3BD"}}>
                {winner == 'circle' ? <div id='circle-winner'></div> : <div id='cross-winner'></div>}
                        TAKES THE ROUND
            </span>
                </>
                : <span id='tie-label'>It's a tie! </span>}
            <div id='end-screen-bttn-container'>
                <div id='quit-bttn' onClick={quitGame}>

                </div>
                <div id='next-round-bttn' onClick={restartGame}>

                </div>
            </div>
        </div>
    </div>
}