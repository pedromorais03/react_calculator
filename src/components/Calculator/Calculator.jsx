import {React, useState} from "react"
import "./Calculator.css"

const Calculator = () => {
   const [currentValue, setCurrentValue] = useState("0")
   const [pendingOperation, setPendingOperation] = useState(null)
   const [pendingValue, setPendingValue] = useState(null)
   const [completeOperation, setCompleteOperation] = useState("")

   const keyPadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   const operations = ['+', '-', '*', '/']

   const handleClick = (number) => {
      setCurrentValue(prevValue => {
         if(prevValue === "0")
            return number
         else
            return prevValue + number
      })

      setCompleteOperation(prevOperation => prevOperation + number)
   }

   const handleClear = () => {
      setCurrentValue("0")
      setPendingValue(null)
      setPendingOperation(null)
      setCompleteOperation("")
   }

   return (
      <div className="calculator">
         <div className="complete-operation">{completeOperation}</div>
         <div className="display">{currentValue}</div>

         <div className="buttons">
            <button onClick={handleClear}>AC</button>

            {keyPadNumbers.map((num) => (
               <button key={num} onClick={() => handleClick(num)}>{num}</button>
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