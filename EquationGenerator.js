
import React, { useState } from 'react';
import Equation from './Equation';

function EquationGenerator({ onGenerateEquation }) {
  const [equation, setEquation] = useState('');
  const [operator, setOperator] = useState('and');
  const [operandA, setOperandA] = useState(false);
  const [operandB, setOperandB] = useState(false);

  function handleGenerateClick() {
    const newEquation = {
      operator: operator,
      operandA: operandA ? "true" : "false",
      operandB: operandB ? "true" : "false"
    };
    onGenerateEquation(newEquation);
  }
  

  return (
    
    <div className="equation-generator">
      <div style={{border: "1pt solid black"}}>
      {equation}
    </div>
      <h3>Создание уравнения:</h3>
      <div>
        <label>
          Operand A:
          <input type="checkbox" checked={operandA} onChange={() => setOperandA(!operandA)} />
          
        </label>
      </div>
      <div>
        <label>
          Operator:
          <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="and">AND</option>
            <option value="or">OR</option>
            <option value="not">NOT</option>
          </select>
        </label>
      </div>
      {operator != "not" && (
        <div>
            <label>
            Operand B:
            <input type="checkbox" checked={operandB} onChange={() => setOperandB(!operandB)} />
            </label>
        </div>
      )}
      
      <div>
        <button onClick={handleGenerateClick}>Сгенерировать уравнение</button>
      </div>
    </div>
    
  );
}

export default EquationGenerator;