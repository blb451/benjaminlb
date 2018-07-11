// Modules
import React, { Fragment } from 'react';

// Assets
import newspaper from 'assets/images/newspaper.svg';
import icecream from 'assets/images/icecream.svg';
import perfume from 'assets/images/perfume.svg';
import chat from 'assets/images/chat.svg';
import headphones from 'assets/images/headphones.svg';

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
  Centered,
  Label,
  IconContainer,
  Icon,
  Decoration,
} from './styles';

const HomeView = () => (
  <Fragment>
    <Base>
      <PageTitle>
        <Name>Benjamin Brenner</Name>
        <Title>Web Developer</Title>
      </PageTitle>
      <Row>
        <Left>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eros quis arcu
            mattis hendrerit ut sit amet nisl. Curabitur.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut aliquam velit.
            Vestibulum at tortor non leo semper pretium. Sed ultrices turpis id nunc sollicitudin
            sagittis. Maecenas egestas bibendum congue. Nulla egestas lacus vitae ipsum efficitur
            bibendum. Morbi sed commodo lorem. In tortor nibh, consequat.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra, arcu sed
            lobortis eleifend, elit dui pretium odio, id gravida erat lacus quis tellus. Integer at
            porta orci. Vestibulum congue.
          </Text>
        </Left>
        <Right>
          <Centered>
            <Label>Recent Projects</Label>
            <IconContainer hoverColor="#EA9550">
              <Icon src={newspaper} />
            </IconContainer>
            <IconContainer hoverColor="#69A1B7">
              <Icon src={icecream} />
            </IconContainer>
            <IconContainer hoverColor="#85597B">
              <Icon src={perfume} />
            </IconContainer>
            <IconContainer hoverColor="#305D7F">
              <Icon src={chat} />
            </IconContainer>
            <IconContainer hoverColor="#6b9430">
              <Icon src={headphones} />
            </IconContainer>
          </Centered>
        </Right>
      </Row>
    </Base>
    <Decoration />
  </Fragment>
);

export default HomeView;
