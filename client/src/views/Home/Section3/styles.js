import styled from 'styled-components';

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  padding: 32px 80px;
  grid-template-rows: auto 220px 1fr;
  @media (max-width: 1100px){
    padding:20px 15px;
  }
  
  h5{
    width:420px;

    @media (max-width: 1100px){
        width:320px;
    }
  }
`

export const CardCointainer = styled.div`
  display:grid;
  grid-auto-flow:column;
  justify-content: space-between;
`
export const ModeGrid = styled.div`
  height: 32px;
  column-gap: 60px;
  justify-self: center;
  align-self: start;
  width: fit-content;
  grid-template-columns: auto auto;

  @media (max-width: 1100px){
    grid-template-columns: 1fr;

    img{
      height:250px; 
      width:290px;
    }
  }
`