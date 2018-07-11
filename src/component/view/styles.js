// Modules
import styled from 'styled-components';

// Constants
import { colors, lineHeight, fontSizes, fontWeights, breakpoints } from 'config/style.constant';

export const Name = styled.h1`
  font-size: ${fontSizes.xLarge}em;
  font-weight: ${fontWeights.xBold};
  font-family: 'Noto Serif', serif;
  line-height: ${lineHeight.title}em;
  color: ${colors.primary};
  margin: 0;
  padding: 0;
`;

export const Title = styled.h2`
  font-size: ${fontSizes.xLarge}em;
  font-weight: ${fontWeights.normal};
  font-family: 'Noto Serif', serif;
  line-height: ${lineHeight.title}em;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`;

export const Label = styled.div`
  text-transform: uppercase;
  font-size: ${fontSizes.xSmall}em;
  font-weight: ${fontWeights.bold};
  font-family: 'Open Sans', sans-serif;
  line-height: ${lineHeight.title}em;
  letter-spacing: 0.1em;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: ${fontSizes.normal}em;
  margin: 1em 0;
`;

export const Base = styled.div`
  margin: auto;
  max-width: 760px;
`;

export const PageTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 30px;
  min-width: 280px;

  @media screen and (max-width: ${breakpoints.small}px) {
    padding: 0;
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 30px;
  min-width: 280px;

  @media screen and (max-width: ${breakpoints.small}px) {
    padding: 0;
    width: 100%;
  }
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 6px solid ${colors.darkGrey};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    border-color: ${props => props.hoverColor || colors.secondary};
  }
`;

export const Icon = styled.img`
  height: 75px;
  width: auto;
`;

export const Decoration = styled.div`
  width: 100%;
  height: 75px;
  left: 0px;
  bottom: 0px;
  margin-top: 20px;
  position: relative;
  content: '';
  position: absolute;
  background: linear-gradient(135deg, ${colors.background} 25%, transparent 25%) -64px 0,
    linear-gradient(225deg, ${colors.background} 25%, transparent 25%) -64px 0,
    linear-gradient(45deg, transparent 25%, transparent 25%);
  background-size: 128px 128px;
  background-color: ${colors.decoration};
`;
