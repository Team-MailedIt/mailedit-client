import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MThumbnail({
  id,
  title,
  subtitle,
  content,
  description,
}) {
  return (
    <Wrapper id={id}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Border />
      <Content>{content}</Content>
      <Bottom>{description}</Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 310px;
  max-width: 360px;
  height: 162px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  & + & {
    margin-top: 12px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  margin-left: 5.5%;
  font-weight: 500;
  font-size: 16px;
`;

const Subtitle = styled.div`
  margin-top: 8px;
  margin-left: 5.5%;

  font-weight: 400;
  font-size: 12px;
`;

const Border = styled.div`
  width: 88%;
  height: 1px;
  margin-top: 13px;
  margin-left: 5.5%;

  background: ${colors.gray.gray4};
`;

const Content = styled.div`
  width: 88%;
  height: 30px;
  margin-top: 13px;
  margin-left: 5.5%;

  font-weight: 300;
  font-size: 11px;
  line-height: 140%;

  overflow: hidden;
`;

const Bottom = styled.div`
  width: 100%;
  height: 30px;
  padding-left: 20px;
  margin-top: 16px;

  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 11px;
  color: ${colors.main.main};
  background: ${colors.main.indigo0};
`;
