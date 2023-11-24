import React from 'react';
import ImageList from "./ImageList";
class Content extends React.Component {
    render() {
        return (
            <>
                <div>Хоббі:</div>
                <ul>
                    <li id="coding" onClick={changeColorAndTextUsingElements}>Кодінг</li>
                    <li className="debugging" onClick={changeColorAndTextUsingQuery}>Дебагінг</li>
                    <li>Породження багів</li>
                </ul>
                <div>Улюблені фільми:</div>
                <ol>
                    <li>Зелений слоник</li>
                    <li>Зелений слоник 2</li>
                    <li>Зелений слоник 3</li>
                </ol>
                <p>Моє улюблене місто в Україні - це Львів. Ця давня культурна столиця завжди зачаровує своєю архітектурною красою та атмосферою. Вуличні кав'ярні, величні площі та багатий культурний спадок роблять Львів неймовірною ділянкою для відкриття та вивчення.</p>
                <ImageList />
            </>
        )
    }
}
export default Content;

function changeColorAndTextUsingElements(){
    const coding = document.getElementById("coding");
    coding.style.color = getRandomColor();
    coding.style.backgroundColor = getRandomColor();
}

function changeColorAndTextUsingQuery(){
    const debugging = document.querySelectorAll("li.debugging");
    debugging[0].style.color = getRandomColor();
    debugging[0].style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

