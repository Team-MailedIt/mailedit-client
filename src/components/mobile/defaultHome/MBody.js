import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Select from '../../commons/Select';
import MThumbnail from './MThumbnail';

export default function MBody() {
  const [option, setOption] = useState('school');

  return (
    <Wrapper>
      <Top>
        <Title>
          {option === 'company'
            ? '회사에서 일잘러가 되려면?'
            : '학교에서 교수님, 조교님께는...'}
        </Title>
        <Select option={option} setOption={setOption} />
      </Top>
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
      <MThumbnail />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 360px;
  height: 24px;
  margin-top: 32px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;

  color: ${colors.main.indigo6};
  opacity: 0.8;
`;
