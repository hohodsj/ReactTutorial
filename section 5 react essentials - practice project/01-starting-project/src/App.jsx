import { useState } from 'react';
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results';


function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setuserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue // force newValue type cast from string to int during event.target.value
        }
    })
}

  return (
    <>
    <Header></Header>
    <UserInput onChange={handleChange} userInput={userInput}></UserInput>
    {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
    
  )
}

export default App
