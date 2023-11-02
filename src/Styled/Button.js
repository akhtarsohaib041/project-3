
import { styled } from "styled-components";

export const Button = styled.button `

    background: black;
    color: white;
    width: 220px;
    height: 44px;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

`;


export const OutlineButton = styled(Button) `

    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.1s background ease-in;


    &:hover {
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.1s background ease-in;
    }


`;
