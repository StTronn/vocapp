import styled from 'styled-components';

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  padding: 32px 80px;
`

export const CardCointainer = styled.div`
  display:grid;
  grid-auto-flow:column;
  grid-template-columns: 420px auto;
  text-align:left;
  justify-content: space-between;
`

export default {
  Cointainer,
  CardCointainer,
}