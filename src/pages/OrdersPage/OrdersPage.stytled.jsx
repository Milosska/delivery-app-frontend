import styled from 'styled-components';
import * as image from '../../images/orders.png';
import * as bigImage from '../../images/orders@2x.png';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  flex: 2;
  padding: 20px 10px;

  > li {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const SmallColumn = styled.div`
  flex: 1;
  width: 100%;
  height: 300px;
  padding: 10px;
`;

export const BgThumb = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  margin: auto;

  width: 70%;
  height: 80%;

  background-image: url(${image.default});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bigImage.default});
  }
`;
