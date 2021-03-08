import React from "react";
import Card from "../../../components/CardUi";
import style from "./styles";
import Button from "../../../components/Button";

const { TopContainer, InfoCointainer, Nav, TopCardWrapper, BannerInfo } = style;

const demoCard = {
  front: "Abstract",
  back: "Showing Important details",
  status: "New",
};


const TopInfo = () => {
  return (
    <TopContainer>
      <div>
        <Nav>
          <Logo />
        </Nav>
        <BannerInfo>
          <InfoCointainer>
            <div className="font-bold text-h1 black">Learn Words Like Never Before
            </div>
            <Button text="Demo" />
          </InfoCointainer>
          <div style={{ position: "relative" }}>
            <Card card={demoCard} flip={false} />
            <TopCardWrapper>
              <Card card={demoCard} flip={false} />
            </TopCardWrapper>
          </div>
        </BannerInfo>
      </div>
    </TopContainer>
  )
}

const Logo = () => (
  <svg
    width="47"
    height="36"
    viewBox="0 0 47 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.84395 32L23.5 7.44114L39.1561 32H7.84395Z"
      stroke="#457B9D"
      stroke-width="8"
    />
  </svg>
);

export default TopInfo;
