// Modules
import React from 'react';
import Proptypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TIMEOUT = 1000;

// eslint-disable-next-line
const SlideTransition = ({ location, children }) => (
  <TransitionGroup>
    <CSSTransition key={location} timeout={TIMEOUT} classNames="slide" unmountOnExit>
      {children}
    </CSSTransition>
  </TransitionGroup>
);

SlideTransition.propTypes = {
  children: Proptypes.node.isRequired,
};

export { default as slide } from './slide';
export default SlideTransition;
