import React, {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../Styled/Button'
import Rules from './Rules'

function GamePlay() {

  const [score, setScore] = useState(0);

  const [selectedNumbers, setSelectedNumbers] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [error, setError] = useState('');

  const [showRules, setShowRules] = useState(false);


  
  const generateRandomNumber = (min, max) => {

    return Math.floor(Math.random() * (max - min) + min);

  }

  const roleDice = () => {

    if(!selectedNumbers) {

      setError("You have not selected any number");

      return;
    }

    
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber);

    if(selectedNumbers === randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumbers(undefined);

  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumbers={selectedNumbers} setSelectedNumbers={setSelectedNumbers} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules />}

    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main `

  padding-top: 10px;

  .top_section {

    display: flex;
    justify-content: space-around;
    align-items: end;

  }

  .btns {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
  }

`;