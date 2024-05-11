import React, { useEffect, useState } from "react";
import "./FallingCat.css";

function FallingCat({ id }) {
    const [top, setTop] = useState(-100);
    const [left, setLeft] = useState(Math.random() * window.innerWidth);
    const [emoji] = useState(getRandomEmoji());

    useEffect(() => {
        const fallingInterval = setInterval(() => {
            setTop(prevTop => prevTop + 1); // Уменьшаем шаг движения котика вниз
        }, 10); // Уменьшаем интервал для более плавного движения

        return () => clearInterval(fallingInterval);
    }, []);

    function getRandomEmoji() {
        const emojis = ["🐱", "😺", "😸", "😼", "😽", "🙀", "😿", "😾","🐈", "🐈‍⬛"];
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    }

    return (
        <div className="FallingCat" style={{ top, left }}>
            {emoji}
        </div>
    );
}

export default FallingCat;
