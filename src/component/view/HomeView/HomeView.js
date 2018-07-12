// Modules
import React from 'react';

// Assets
import newspaper from 'assets/images/project-icons/newspaper.svg';
import icecream from 'assets/images/project-icons/icecream.svg';
import perfume from 'assets/images/project-icons/perfume.svg';
import chat from 'assets/images/project-icons/chat.svg';
import headphones from 'assets/images/project-icons/headphones.svg';

// Styles
import {
  Base,
  PageTitle,
  Name,
  Title,
  Row,
  Left,
  Right,
  Text,
  CodeLink,
  Centered,
  Label,
  IconContainer,
  Icon,
  Contact,
  ContactLinks,
  ContactIcon,
} from './styles';

const HomeView = () => (
  <Base>
    <PageTitle>
      <Name>Benjamin Brenner</Name>
      <Title>Web Developer</Title>
    </PageTitle>
    <Row>
      <Left>
        <Text>
          {
            "I'm passionate about exploring elegent and creative solutions to problems in the digital space."
          }
        </Text>
        <Text>
          {
            "I've been developing web applications based out of Vancouver, BC since graduating the CodeCore Developer Bootcamp in 2016. Right now I spend most of my time working with React, but I love learning new technologies and am always looking for opportunities to grow. Some of my other current programming interests include Elixir/Phoenix and React Native."
          }
        </Text>
        <Text>
          Please feel free to reach out with opportunities, or check out the code for{' '}
          <CodeLink
            href="https://github.com/blb451/benjaminlb"
            target="_blank"
            rel="noopener noreferrer"
          >
            this page.
          </CodeLink>
        </Text>
        <Contact>
          <Label>Get in touch</Label>
          <ContactLinks>
            <a href="http://www.github.com/blb451" target="_blank" rel="noopener noreferrer">
              <ContactIcon icon={['fab', 'github']} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-brenner-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a href="mailto:ben.l.brenner@gmail.com">
              <ContactIcon icon={['far', 'envelope']} size="2x" />
            </a>
          </ContactLinks>
        </Contact>
      </Left>
      <Right>
        <Centered>
          <Label>Recent Projects</Label>
          <a
            href="https://domain7-challenge.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer hoverColor="#EA9550">
              <Icon src={newspaper} />
            </IconContainer>
          </a>
          <a href="http://blackmountaincreamery.com/" target="_blank" rel="noopener noreferrer">
            <IconContainer hoverColor="#69A1B7">
              <Icon src={icecream} />
            </IconContainer>
          </a>
          <a href="http://abbott-clone.surge.sh/" target="_blank" rel="noopener noreferrer">
            <IconContainer hoverColor="#85597B">
              <Icon src={perfume} />
            </IconContainer>
          </a>
          <a href="https://blb-node-chat.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <IconContainer hoverColor="#305D7F">
              <Icon src={chat} />
            </IconContainer>
          </a>
          <a href="https://splitter-music.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <IconContainer hoverColor="#6b9430">
              <Icon src={headphones} />
            </IconContainer>
          </a>
        </Centered>
      </Right>
    </Row>
  </Base>
);

export default HomeView;
