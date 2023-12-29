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

   const handleOperation = (operation) => {
      setCompleteOperation(`${currentValue} ${operation} `)
      setPendingOperation(operation)
      setPendingValue(currentValue)
      setCurrentValue("0")
   }

   const handleCalculate = () => {
      if(!pendingOperation || !pendingValue){
         return
      }

      const num1 = parseFloat(pendingValue)
      const num2 = parseFloat(currentValue)
      let result

      switch(pendingOperation){
         case '+':
            result = num1 + num2
            break
         case '-':
            result = num1 - num2
            break
         case '*':
            result = num1 * num2
            break
         case '/':
            if(num2 !== 0){
               result = num1 / num2
            }else{
               setCurrentValue("Error")
               setPendingValue(null)
               setPendingOperation(null)
               setCompleteOperation("Error")      
               return
            }
            break
         default:
            break
      }

      setCompleteOperation(`${pendingValue} ${pendingOperation} ${currentValue} = ${result}`)
      setCurrentValue(result.toString())
      setPendingOperation(null)
      setPendingValue(null)
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
               <button key={op} onClick={() => handleOperation(op)}>{op}</button>
            ))}

            <button onClick={handleCalculate}>=</button>
         </div>

         
      </div>
   )
}

export default Calculator