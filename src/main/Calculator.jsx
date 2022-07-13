import React, { Component } from "react";

import "./Calculator.css"

export default class Calculator extends Component{
    render() {
        return(
            <div className="calculator">
                <div class="background">
                    <div class="calculadora">
                        <input className="tela" type="text" name='tela' value='' />
                        <button className="button-default clear">C</button>
                        <button value="0" className="button button-default buttonNumber zero">0</button>
                        <button value="1" className="button button-default buttonNumber um">1</button>
                        <button value="2" className="button button-default buttonNumber dois">2</button>
                        <button value="3" className="button button-default buttonNumber tres">3</button>
                        <button value="4" className="button button-default buttonNumber quatro">4</button>
                        <button value="5" className="button button-default buttonNumber cinco">5</button>
                        <button value="6" className="button button-default buttonNumber seis">6</button>
                        <button value="7" className="button button-default buttonNumber sete">7</button>
                        <button value="8" className="button button-default buttonNumber oito">8</button>
                        <button value="9" className="button button-default buttonNumber nove">9</button>
                        <button value="." className="button button-default buttonOpera ponto">.</button>
                        <button value="+" className="button button-default buttonOpera mais">+</button>
                        <button value="-" className="button button-default buttonOpera menos">-</button>
                        <button value="x" className="button button-default buttonOpera veses">x</button>
                        <button value="÷" className="button button-default buttonOpera divisão">÷</button>
                        <button value="=" className="button button-default buttonOpera igual">=</button>
                    </div>
                </div>
        
            </div>
        )
    }
}