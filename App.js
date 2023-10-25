// App.js
import React, { useState, useEffect } from 'react';
import Equation from './Equation'; 
import EquationGenerator from './EquationGenerator';
import MyTree from './MyTree';  // Импорт MyTree
import './App.css';

function App() {
  const [isTest, setTest] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [equations, setEquations] = useState([]);
  const [treeData, setTreeData] = useState({ name: 'Root', children: [] });

  useEffect(() => {
    const updatedTreeData = {
      name: selectedValue,
      children: equations.map(equation => ({
        name: equation.operator.toUpperCase(),
        children: [
          { name: `A: ${equation.operandA}` },
          { name: `B: ${equation.operandB}` }
        ]
      }))
    };
    setTreeData(updatedTreeData);
  }, [selectedValue, equations]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedOption = formData.get('logmath');
    setSelectedValue(selectedOption);
    setTest(true);
  }

  function addEquation(newEquation) {
    setEquations(prevEquations => {
        const lastEquation = prevEquations[prevEquations.length - 1];
        if (!lastEquation || (lastEquation.children && lastEquation.children.length >= 2)) {
            return [...prevEquations, {
                name: newEquation.operator.toUpperCase(),
                children: newEquation.operator === "not" ? [
                    { name: `A: ${newEquation.operandA}` }
                ] : [
                    { name: `A: ${newEquation.operandA}` },
                    { name: `B: ${newEquation.operandB}` }
                ]
            }];
        } else {
            const newChild = {
                name: newEquation.operator.toUpperCase(),
                children: newEquation.operator === "not" ? [
                    { name: `A: ${newEquation.operandA}` }
                ] : [
                    { name: `A: ${newEquation.operandA}` },
                    { name: `B: ${newEquation.operandB}` }
                ]
            };
            if (newEquation.operator === "not" && lastEquation.children && lastEquation.children.length === 0) {
                lastEquation.children.push(newChild);
            } else if (newEquation.operator !== "not" || (lastEquation.children && lastEquation.children.length < 2)) {
                lastEquation.children.push(newChild);
            } else {
                return [...prevEquations, newChild];
            }
            return [...prevEquations];
        }
    });
}

  return (
    <div>
      <header>
        <h1>Ülalt-alla loogiskaskeem</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <div className="choise">
          {!isTest ? (
            <div>
              <label htmlFor="bool1">Choose final value:</label>
              <select name="logmath" id="bool1">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <input type="submit" id="layer1" value="Ready" />
            </div>
          ) : (
            <div>
              {selectedValue !== null && (
                <div>
                  <label>Вы выбрали: {selectedValue}</label>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
      {isTest && (
        <div>
          {selectedValue !== null && (
            <div>
              <EquationGenerator onGenerateEquation={addEquation} />
            </div>
          )}
          <div className="equations">
          {equations.map((equation, index) => (
        <div className="equation" key={equation.id || index}> 
          <Equation equation={equation} />
        </div>
        ))}
        </div>
          <MyTree data={treeData} /> 
        </div>
      )}
    </div>
  );
}
export default App;
