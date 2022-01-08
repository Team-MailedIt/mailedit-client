import styled from 'styled-components';

export const PrevIcon = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 50%; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const DragIcon = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 8px;
  height: 16px;
`;