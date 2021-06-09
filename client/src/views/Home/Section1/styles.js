import styled from 'styled-components';

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  min-height: 821px;
  background:#fff;
  padding: 32px 80px;
  @media (max-width: 1100px){
    padding: 20px 15px;
    justify-items: center;
  }
`

export const CardCointainer = styled.div`
  display:grid;
  grid-auto-flow:column;
  justify-content: space-between;

  @media (max-width: 1100px){
      grid-auto-flow:row;
  }
`

export default {
  Cointainer,
  CardCointainer,
}