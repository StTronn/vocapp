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
            <span className="pt-2 md:pt-0">
              <div className="font-bold text-3xl md:text-4xl pb-4" style={{color:"#125d98"}}>Vocapp</div>
              <div className="font-bold text-3xl md:text-4xl black">Learn Words Like Never Before
            </div>
            </span>
            <Button text="Preview" onClick={() => { history.push('/set') }} />
          </InfoCointainer>
          <div className="pointer-events-none" style={{ position: "relative",justifySelf:'center' }}>
            <Card card={demoCard} />
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
