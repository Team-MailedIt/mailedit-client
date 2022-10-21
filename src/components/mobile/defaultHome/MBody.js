import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import MSelect from './MSelect';
import MThumbnail from './MThumbnail';
import school from '../../../constants/school.json';
import company from '../../../constants/company.json';

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
        <MSelect option={option} setOption={setOption} />
      </Top>
      {option === 'company'
        ? company.map(
            ({ TemplateId, title, subtitle, description, content }) => (
              <MThumbnail
                id={TemplateId}
                title={title}
                subtitle={subtitle}
                description={description}
                content={content[1].html}
              />
            )
          )
        : school.map(
            ({ TemplateId, title, subtitle, description, content }) => (
              <MThumbnail
                id={TemplateId}
                title={title}
                subtitle={subtitle}
                description={description}
                content={content[1].html}
              />
            )
          )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 24px;
  margin-top: 32px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;

  color: ${colors.main.indigo6};
  opacity: 0.8;
`;
