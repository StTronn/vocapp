import styled from "styled-components";

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  background:#fff;
  padding: 20px 180px;
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