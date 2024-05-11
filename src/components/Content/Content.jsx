import React from 'react';
import MyButton from "../Button/MyButton";

function Content({numberOfCalls, setNumberOfCalls, setNumberOfEscalation }) {
    return (
        <div className="content">
            <h2 className="countCalls">Количество звонков</h2>
            <h1>{numberOfCalls}</h1>
            <div>
                <MyButton onClick={() => setNumberOfCalls(prevCount => prevCount - 1)} className="btn-minus">-Минус</MyButton>
                <MyButton onClick={() => setNumberOfCalls(prevCount => prevCount + 1)} className="btn-plus">Плюс +</MyButton>
            </div>
            <MyButton onClick={
                () => {
                    setNumberOfEscalation(prevCount => prevCount + 1)
                    setNumberOfCalls(prevCount => prevCount + 1)
                }}
                      className="btn-escalation">
                Эскалация
            </MyButton>
            <MyButton
                onClick={
                    () => {
                        setNumberOfEscalation(0)
                        setNumberOfCalls(0)
                    }}
                className="btn-zero">
                Сбросить
            </MyButton>
        </div>
    );
}

export default Content;
