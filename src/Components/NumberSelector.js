import styled from 'styled-components'
import React from 'react';


function NumberSelector({setError, error, selectedNumbers, setSelectedNumbers}) {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumbers(value);
    setError('');
  }


  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">

          {arrNumber.map((value, i) => (
            <Box isSelected={value === selectedNumbers} key={i} onClick={() => numberSelectorHandler(value) }>{value}</Box>
          ))}

        </div>
        <p>Select Number</p>
        
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div `

  display: flex;
  flex-direction: column;
  align-items: end;

    .error {
      color: #FF0C0C;
      font-size: 24px;
    }

    .flex{
      display: flex;
      gap: 24px;
      cursor: pointer;
    }

    p {
      font-size: 24px;
      font-weight: 700;
      margin-top: 30px;
      cursor: pointer;
    }

`;

const Box = styled.div `

    height: 72px;
    width: 72px;
    color: ${(props) => props.isSelected ? "white" : 'black'};
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 800;
    background-color: ${(props) => props.isSelected ? "black" : 'white'};

`;