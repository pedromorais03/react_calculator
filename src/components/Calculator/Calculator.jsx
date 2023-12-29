import {React, useState} from "react"
import "./Calculator.css"

const Calculator = () => {
   const keyPadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   const operations = ['+', '-', '*', '/']

   return (
      <div className="calculator">
         <div className="complete-operation"></div>
         <div className="display"></div>

         <div className="buttons">
            <button>AC</button>

            {keyPadNumbers.map((num) => (
               <button key={num}>{num}</button>
            ))}

            {operations.map((op) => (
               <button key={op}>{op}</button>
            ))}

            <button>=</button>
         </div>

         
      </div>
   )
}

export default Calculator