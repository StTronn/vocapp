import styled from 'styled-components';

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  padding: 32px 80px;
  grid-template-rows: auto 220px 1fr;
  
  h5{
    width:420px;
  }
`

export const CardCointainer = styled.div`
  display:grid;
  grid-auto-flow:column;
  justify-content: space-between;
`

export default {
  Cointainer,
  CardCointainer,
}