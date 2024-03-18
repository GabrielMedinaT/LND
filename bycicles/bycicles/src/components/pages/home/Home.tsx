import React, { useState } from "react";
import "./home.css";

const Home: React.FC = () => {
    const [b, setB] = useState<number>(0);
    const [rojo, setRojo] = useState<boolean>(false);
    const [verde, setVerde] = useState<boolean>(false);
    const [azul, setAzul] = useState<boolean>(false);
    const [blanco, setBlanco] = useState<boolean>(true);

    function sumar(): void {
        setB(b + 1);
    }
    function setB0(): void {
        setB(0);
    }
    function setColor(color: string): void {
        if (color === "rojo") {
            setRojo(true);
            setVerde(false);
            setAzul(false);
            setBlanco(false);
        } else if (color === "verde") {
            setRojo(false);
            setVerde(true);
            setAzul(false);
            setBlanco(false);
        } else if (color === "azul") {
            setRojo(false);
            setVerde(false);
            setAzul(true);
            setBlanco(false);
        } else if (color === "blanco") {
            setRojo(false);
            setVerde(false);
            setAzul(false);
            setBlanco(true);
        }
    }
    function setrojo(): void {
        setColor("rojo");
    }
    function setverde(): void {
        setColor("verde");
    }
    function setazul(): void {
        setColor("azul");
    }
    function setblanco(): void {
        setColor("blanco");
    }

    return (
        <div
            className={
                rojo ? "rojo" : verde ? "verde" : azul ? "azul" : blanco ? "blanco" : ""
            }
        >
            <div className="frase">
                <button>HOME</button>
                <p>Hola Mundo cruel </p>
                <button onClick={sumar}>Sumar</button>
                <button onClick={setB0}>A Cero</button>
                <button onClick={setazul}>azul</button>
                <button onClick={setrojo}>rojo</button>
                <button onClick={setverde}>verde</button>
                <button onClick={setblanco}>blanco</button>

                <p>{b}</p>
            </div>
        </div>
    );
};

export default Home;
