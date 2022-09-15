import React, { useState } from "react";

function Calc() {
    const [input, setInput] = useState("")
    const handleCheck = (e) => {
        setInput(input.concat(e.target.name))
    }
    const back = (e) => {
        setInput(input.slice(0, -1)) //input.length - 1
    }
    const calculate = () => {
        try {
            setInput(eval(input).toString())
        }
        catch (e) {
            setInput("something is wrong")
        }
    }
    return (
        <div>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <div className="keypad">
                <button onClick={() => setInput("")}>Clear</button>
                <button onClick={back}>back</button>
                <button name="%" onClick={handleCheck}>&divide;</button>
                <button name="*" onClick={handleCheck}>&times;</button>
                <button name="7" onClick={handleCheck}>7</button>
                <button name="8" onClick={handleCheck}>8</button>
                <button name="9" onClick={handleCheck}>9</button>
                <button name="-" onClick={handleCheck}>&ndash;</button>
                <button name="4" onClick={handleCheck}>4</button>
                <button name="5" onClick={handleCheck}>5</button>
                <button name="6" onClick={handleCheck}>6</button>
                <button name="+" onClick={handleCheck}>+</button>
                <button name="1" onClick={handleCheck}>1</button>
                <button name="2" onClick={handleCheck}>2</button>
                <button name="3" onClick={handleCheck}>3</button>
                <button name="0" onClick={handleCheck}>0</button>
                <button name="." onClick={handleCheck}>.</button>
                <button name="=" onClick={calculate} className="result">=</button>
            </div>
        </div>
    )
}

export default Calc;
