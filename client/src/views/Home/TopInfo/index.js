import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import Card from '../../../components/Card';
import style from './styles';

const { TopContainer, InfoCointainer, TopCardWrapper, BannerInfo } = style;

const demoCard = {
  front: "Abstract",
  back: "Showing Important details",
  status: "New",
};


const TopInfo = () => {
  const history = useHistory();

  return (
    <TopContainer>
      <div>
        <BannerInfo>
          <InfoCointainer>
            <div className="font-bold text-h1 black">Learn Words Like Never Before
            </div>
            <Button text="Preview" onClick={()=>{history.push('/set')}} />
          </InfoCointainer>
          <div className="pointer-events-none" style={{ position: "relative" }}>
            <Card card={demoCard}  />
            <TopCardWrapper>
              <Card card={demoCard} />
            </TopCardWrapper>
          </div>
        </BannerInfo>
      </div>
    </TopContainer>
  )
}

export default TopInfo;
