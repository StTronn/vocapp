import styled from 'styled-components';

export const Cointainer = styled.div`
  display:grid;
  text-align:center;
  width:100%;
  height:100vh;
  min-height: 721px;
  padding: 32px 80px;
  @media (max-width: 1100px){
    padding: 20px 15px;
    grid-template-rows: 100px 1fr;
  }
`

export const CardCointainer = styled.div`
  display:grid;
  grid-template-columns: 420px auto;
  text-align:left;
  justify-content: space-between;
  @media (max-width: 1100px){
      grid-template-columns:1fr;
  }
`

export default {
  Cointainer,
  CardCointainer,
}