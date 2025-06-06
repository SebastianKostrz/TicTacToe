import './Win.css'
import {useEffect, useState} from "react";

export default function Win({setWinner, figures, winner,setComponentToDisplay}) {
    const [winningPosition, setWinningPosition] = useState({
        position: "",
        rotation: ""
    });

    useEffect(() => {
        if(winner !== false) {
            setComponentToDisplay('end-screen')
        }
    },[winner])





    function checkForWinner() {
        const winnerPositions = [
            "top-horizontal",
            "mid-horizontal",
            "bottom-horizontal",
            "left-vertical",
            "middle-vertical",
            "right-vertical",
            "diagonal-normal",
            "diagonal-reverted"
        ]

        const winningCombinations = [
            [0, 1, 2], //top-horizontal
            [3, 4, 5], //mid-horizontal
            [6, 7, 8], //bot-horizontal
            [0, 3, 6], //left-vertical
            [1, 4, 7], //mid-vertical
            [2, 5, 8], //right-vertica
            [0, 4, 8], //diagonal-normal
            [6, 4, 2] //diagonal-reverted
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (figures[a] === "circle" && figures[b] === "circle" && figures[c] === "circle") {


                setWinningPosition({
                    position: winnerPositions[i].split("-")[0],
                    rotation: winnerPositions[i].split("-")[1]
                });
                setTimeout(() => {
                    setWinner("circle");


                }, 500)
                return null;
            } else if (figures[a] === "cross" && figures[b] === "cross" && figures[c] === "cross") {

                setWinningPosition({
                    position: winnerPositions[i].split("-")[0],
                    rotation: winnerPositions[i].split("-")[1]
                });
                setTimeout(() => {
                    setWinner("cross");

                }, 500)
                return null;
            }
        }
        if (!figures.includes("") && winner === false) {
            setWinner("tie");

        }
    }

    useEffect(() => {
        if (figures.some(value => value !== "")) {
            checkForWinner();
        } else {
            setWinningPosition({
                position: "",
                rotation: ""
            })
        }
    }, [JSON.stringify(figures)]);

    useEffect(() => {

    }, [winningPosition]);

    return <div id='win' className={`${winningPosition.position} ${winningPosition.rotation}`}>

    </div>
}