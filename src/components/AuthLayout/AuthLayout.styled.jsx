import styled from 'styled-components';
import * as image from '../../images/login.png';
import * as image_reg from '../../images/register.png';
import * as bigImage from '../../images/login@2x.png';
import * as bigImage_reg from '../../images/register@2x.png';

const setBgImage = layout => {
  return layout === 'register'
    ? `url(${image_reg.default})`
    : `url(${image.default})`;
};

const setBigBgImage = layout => {
  return layout === 'register'
    ? `url(${bigImage_reg.default})`
    : `url(${bigImage.default})`;
};

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const BigColumn = styled.div`
  width: 60%;
`;

export const BgThumb = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  margin: auto;

  width: 70%;
  height: 80%;

  background-image: ${prop => setBgImage(prop.layout)};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${prop => setBigBgImage(prop.layout)};
  }
`;

export const SmallColumn = styled.div`
  width: 40%;
  padding: 20px 30px;
`;
