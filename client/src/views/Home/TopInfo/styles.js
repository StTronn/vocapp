import styled from 'styled-components';

const TopContainer = styled.div`
  color: white;
`;

const InfoCointainer = styled.div`
  display: grid;
  row-gap: 40px;
  height: fit-content;
  @media (max-width: 1100px){
    row-gap:20px;
  }
`;

const Nav = styled.div`
  background: var(--blueDark);
  position: absolute;
  width:100%;
  padding: 20px 80px;
  display: grid;
  grid-auto-flow: column;

`;

const TopCardWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 11px;
`;
const BannerInfo = styled.div`
  display: grid;
  padding: 0px 80px;
  height:100vh;
  min-height: 821px;
  align-items: center;
  grid-template-columns: 480px auto;
  justify-content: space-between;

  @media (max-width: 1100px){
    padding: 80px 15px 0 15px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap:40px;
    min-height: 720px;
    padding-bottom:20px;
  }
`;

export default {
  TopContainer,
  InfoCointainer,
  Nav,
  TopCardWrapper,
  BannerInfo,
};
