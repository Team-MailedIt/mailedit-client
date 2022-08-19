import styled from 'styled-components';

export const PrevIcon = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 50%; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    cursor: pointer;
  }
`;

export const MainLogo = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 220px;
  height: 44px;
  @media screen and (max-width: 1440px) {
    width: 163px;
    height: auto;
  }
`;

export const Illust1 = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 594px;
  height: 409px;
  @media screen and (max-width: 1440px) {
    width: 479px;
    height: 330px;
  }
`;

export const BodyLogo = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 452px;
  height: 92px;
  @media screen and (max-width: 1440px) {
    width: 363px;
    height: 74px;
  }
`;

export const Illust2 = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1400px;
  height: auto;
  @media screen and (max-width: 1440px) {
    width: 77vw;
    height: auto;
  }
`;
export const FooterLogo = styled.img`
  width: 195px;
  height: 56px;
  margin-top: 72px;

  @media screen and (max-width: 1440px) {
    width: 146px;
    height: 42px;
    margin-top: 51px;
  }
`;
export const GearIcon = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 12px;
  height: 12px;
`;
export const PlusIcon = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 8px;
  height: 8px;
`;
