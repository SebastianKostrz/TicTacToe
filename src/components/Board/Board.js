import './Board.css';
import Square from './sub/Square/Square';
import Win from './sub/Win/Win';

export default function Board({
                                  turn, setTurn, figures, setFigures, winner, setWinner, playerFigure,
                                  gamesResults, setGamesResults,setComponentToDisplay
                              }) {


    return <div id='board-container'>
        <div id='board-container-top'>
            <div id='logo' className='board-top-element'>
                <div id='cross-logo'>

                </div>
                <div id='circle-logo'>

                </div>
            </div>
            <div id='turn' className='board-top-element'>
                {turn === 'circle' ? <div id={'circle-logo'}></div> : <div id={'cross-logo'}></div>}
                <span>TURN</span>
            </div>
            <div id='restart-game-bttn-container' className='board-top-element'>
                <div id='restart-game-bttn' onClick={() => setGamesResults({
                    won: 0,
                    tied: 0,
                    lost: 0
                })}></div>
            </div>
        </div>
        <div id='board'>
            <Win winner={winner} setWinner={setWinner} figures={figures} setComponentToDisplay={setComponentToDisplay}/>
            {figures.map((_, index) => (
                <Square key={index} figure={figures[index]} figures={figures}
                        setFigures={setFigures} turn={turn} setTurn={setTurn}
                        index={index}/>
            ))}
        </div>
        <div id='board-container-bottom'>
            <div id='games-won' className='result-block'
                 style={{backgroundColor: playerFigure === 'circle' ? '#F2B137' : '#31C3BD'}}>
                <span className='result-label'>GAMES WON</span>
                <span className='result'>{gamesResults.won}</span>
            </div>
            <div id='games-tied' className='result-block'>
                <span className='result-label'>GAMES TIED</span>
                <span className='result'>{gamesResults.tied}</span>
            </div>
            <div id='games-lost' className='result-block'
                 style={{backgroundColor: playerFigure !== 'circle' ? '#F2B137' : '#31C3BD'}}>
                <span className='result-label'>GAMES LOST</span>
                <span className='result'>{gamesResults.lost}</span>
            </div>
        </div>


    </div>
}