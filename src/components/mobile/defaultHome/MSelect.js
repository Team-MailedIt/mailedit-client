import styled from 'styled-components';
import COLORS from '../../../constants/colors';

import fold from '../../../constants/icons/fold.svg';
import unfold from '../../../constants/icons/unfold.svg';

import { useState } from 'react';

const MSelect = ({ option, setOption }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChangeSelect = () => {
    setIsSelected(!isSelected);
  };

  // change option
  const handleChangeOption = (e) => {
    setOption(e.target.id);
    setIsSelected(!isSelected);
  };

  return (
    <Wrapper>
      <Title onClick={handleChangeSelect} isSelected={isSelected}>
        {option === 'company' ? '회사' : '학교'}

        {isSelected ? <ArrowIcon src={fold} /> : <ArrowIcon src={unfold} />}
      </Title>
      {isSelected && (
        <OptionWrapper onClick={handleChangeOption}>
          <Option id="school">학교</Option>
          <Option id="company">회사</Option>
        </OptionWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 82px;

  position: relative;
  z-index: 0;
`;

const Title = styled.div`
  width: 82px;
  height: 24px;
  padding: 6px 8px 6px 12px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1.5px solid ${COLORS.gray2};

  font-size: 11px;
  color: ${COLORS.gray8};

  border-radius: ${(props) => (props.isSelected ? '4px 4px 0px 0px' : '4px')};

  &:hover {
    cursor: pointer;
  }
`;

const OptionWrapper = styled.div`
  width: 82px;
  height: 42px;

  position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  border: 1.5px solid ${COLORS.gray2};
  border-top: none;
  border-radius: 0px 0px 4px 4px;

  background: ${COLORS.UIWhite};
`;

const Option = styled.div`
  width: 74px;
  height: 16px;
  padding-left: 8px;

  display: flex;
  align-items: center;
  font-size: 10px;

  border-radius: 2px;
  color: ${COLORS.gray8};

  &:hover {
    cursor: pointer;
    background: ${COLORS.indigo1};
  }
`;

const ArrowIcon = styled.img`
  width: 12px;
`;

export default MSelect;
