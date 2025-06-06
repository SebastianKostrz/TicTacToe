import './StartingScreen.css';
import {useEffect} from "react";

export default function StartingScreen({
                                           setTurn,
                                           setGameMode,
                                           setPlayerFigure,
                                           playerFigure,
                                           setComponentToDisplay,
                                           gameMode
                                       }) {
    useEffect(() => {
        if (gameMode !== '') {
            setTimeout(() => {
                setComponentToDisplay('game-board');
            }, 300)
        }
    }, [gameMode]);

    return <div id='starting-screen-container' className={gameMode!=='' ? 'fade-away-animation' : 'fade-in-animation'}>
        <div id='symbol-choice'>
            <span id='symbol-choice-label-1'>PICK PLAYER 1'S MARK</span>
            <div id='symbol-choice-container'>
                <div id='choice-shadow' style={{left: playerFigure === 'cross' ? '2.5%' : '52.5%'}}></div>
                <div id='cross-choice' onClick={() => {
                    setTurn('cross');
                    setPlayerFigure('cross')
                }}>

                </div>
                <div id='circle-choice' onClick={() => {
                    setTurn('circle');
                    setPlayerFigure('circle')
                }}>

                </div>
            </div>
            <span id='symbol-choice-label-2'>REMEMBER: O GOES FIRST</span>
        </div>
        <div id='cpu-bttn' className='new-game-bttn' onClick={() => setGameMode('cpu')}>

        </div>
        <div id='player-bttn' className='new-game-bttn' onClick={() => setGameMode('player')}></div>
    </div>
}