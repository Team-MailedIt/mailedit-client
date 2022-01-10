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
export const MainLogo = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 220px;
  height: 44px;
`;

export const Illust1 = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 594px;
  height: 409px;
`;

export const BodyLogo = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 452px;
  height: 92px;
`;

export const Illust2 = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1400px;
  height: 598px;
`;
export const FooterLogo = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 180;
  height: 35px;
`;
