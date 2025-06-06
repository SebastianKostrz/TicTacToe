import './Square.css';
import Cross from './sub/Cross/Cross';
import Circle from './sub/Circle/Circle';
import {useState} from "react";

export default function Square({turn, figure, setTurn, figures, setFigures, index}) {
    const [wasClicked, setWasClicked] = useState(false);
    const manageClick = () => {
        if (figures[index] === "") {
            // setWasClicked(true);
            const updatedFigures = figures;
            updatedFigures[index] = turn;
            setFigures(updatedFigures);
            turn === "circle" ? setTurn("cross") : setTurn("circle");
        }

    }

    return <div className="square-container" onClick={manageClick}>
        {figure === "cross" ? <Cross key={`cross${index}`}/> : figure === "circle" ? <Circle key={`circle${index}`}/> : null}
    </div>;
}