// Modules
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  font-size: ${fontSizes.xxSmall}em;
  font-weight: ${fontWeights.bold};
  font-family: 'Open Sans', sans-serif;
  line-height: ${lineHeight.title}em;
  letter-spacing: 0.1em;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: ${fontSizes.normal}em;
  margin: 1em 0;
`;

export const CodeLink = styled.a`
  font-weight: ${fontWeights.bold};

  &:hover {
    color: ${colors.decoration};
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
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

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
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

  @media screen and (max-width: ${breakpoints.medium}px) {
    padding: 0;
    margin-bottom: 200px;
  }

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    width: 100%;
  }
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.medium}px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
    background: ${props => props.hoverColor || colors.secondary};
  }

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    margin-right: 3px;
  }
`;

export const Icon = styled.img`
  height: 75px;
  width: auto;
`;

export const Contact = styled.div`
  margin-top: 80px;

  @media screen and (max-width: ${breakpoints.xSmall}px) {
    position: absolute;
    bottom: 90px;
  }

  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    align-self: center;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  @media screen and (max-width: ${breakpoints.xxSmall}px) {
    justify-content: center;
  }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    color: ${colors.decoration};
  }
`;
