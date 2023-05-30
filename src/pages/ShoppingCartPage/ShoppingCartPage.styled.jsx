import styled from 'styled-components';
import * as image from '../../images/empty_cart.png';
import * as bigImage from '../../images/empty_cart@2x.png';

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 20px;
`;

export const BigColumn = styled.div`
  flex: 2;
  padding: 20px 10px;
`;

export const SmallColumn = styled.div`
  flex: 1;
  padding: 20px 10px;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-bottom: 20px;
`;

export const MakeOrderThumb = styled.div`
  width: 100%;
  height: 75px;
  padding: 10px 30px;

  display: flex;
  justify-content: flex-end;

  background-color: #286507;
  border-radius: 20px;
  border: 2px solid #286507;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
`;

export const TotalText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.2;
  color: white;
`;

export const PlaceholderThumb = styled.div`
  width: 100%;
  height: 500px;
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
