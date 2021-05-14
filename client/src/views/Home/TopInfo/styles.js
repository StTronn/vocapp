import styled from "styled-components";

const TopContainer = styled.div`
  color: white;
`;

const InfoCointainer = styled.div`
  display: grid;
  row-gap: 60px;
  height: fit-content;
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
  height: 100vh;
  align-items: center;
  grid-template-columns: 480px auto;
  justify-content: space-between;
`;

export default {
  TopContainer,
  InfoCointainer,
  Nav,
  TopCardWrapper,
  BannerInfo,
};
