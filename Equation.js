import React, { useState, useEffect } from 'react';

function Equation({ equation }) {
  const { operator, operandA, operandB } = equation;

  const [loogika, setLoogika] = useState(false);

  useEffect(() => {
    if (operator === "AND") {
      fetch(`https://localhost:7118/api/ANDloogika/and_operatsioon/${operandA}/${operandB}`)
        .then(res => res.json())
        .then(json => setLoogika(json));
    } else if (operator === "OR") {
      fetch(`https://localhost:7118/api/ORloogika/or_operatsioon/${operandA}/${operandB}`)
        .then(res => res.json())
        .then(json => setLoogika(json));
    } else if (operator === "NOT") {
      fetch(`https://localhost:7118/api/NOTloogika/not_operatsioon/0?bool_1=${operandA}`)
        .then(res => res.json())
        .then(json => setLoogika(json));
    }
  }, [operator, operandA, operandB]);
  return (
    <div className="equation">
      <div className="equation-text">
          <label>{operandA} {operator} {operandB}</label>
        <label>{loogika ? "true" : "false"}</label>
      </div>
    </div>
  );
}
export default Equation;
