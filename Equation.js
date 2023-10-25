import React, { useState, useEffect } from 'react';

function Equation({ operator, operandA, operandB }) {
  const [logicResult, setLogicResult] = useState(false);

  useEffect(() => {
    const url = operator === "not"
      ? `https://localhost:7118/api/NOTloogika/not_operatsioon/0?bool_1=${operandA}`
      : `https://localhost:7118/api/${operator.toUpperCase()}loogika/${operator}_operatsioon/${operandA}/${operandB}`;

    fetch(url)
      .then(res => res.json())
      .then(json => setLogicResult(json))
      .catch(error => console.error('Error:', error));
  }, [operator, operandA, operandB]);

  return (
    <div className="equation">
      <div className="equation-text">
        <label>{operandA} {operator} {operandB}</label>
        <label>{logicResult ? "true" : "false"}</label>
      </div>
    </div>
  );
}

export default Equation;
