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
  padding: 20px 80px;
  height: 80vh;
  padding-top: 80px;
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
