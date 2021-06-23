import React from 'react'
import styled from "styled-components";
import LoginImg from './images/login.png'

const Cointainer = styled.div`
  display:grid;
  grid-template-columns: 6fr 8fr;
  height:100vh;
`

const FormCointainer = styled.div`
background: var(--blueLight);
`

const Login = () => {
    return(
      <Cointainer>
        <FormCointainer className="h-full" >
        </FormCointainer> 
        <div
          className="h-screen"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${LoginImg})`,
            backgroundPosition: "center center",
          }}
        >
        </div>

      </Cointainer>
    )

}

export default Login;
