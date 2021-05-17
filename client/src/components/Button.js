import React from 'react'
import styled from "styled-components";

const Cointainer = styled.div`
    width:fit-content;
    height:fit-content;
`

const Button = ({text,onClick})=>{
    return (
        <Cointainer onClick={onClick} className="py-4 px-8 rounded-md text-h5 font-bold bg-blueDark white">
           {text} 
        </Cointainer>
    );
}

Button.defaultProps ={
    text:"",
    onClick:()=>{},
}

export default Button;