// Modules
import React from 'react';
import Transition from 'react-transition-group/Transition';
import Proptypes from 'prop-types';

// Styles
import { TransitionContainer } from './styles';

const Fade = ({ in: inProp, timeout, children }) => (
  <Transition in={inProp} timeout={timeout}>
    {state => (
      <TransitionContainer state={state} timeout={timeout}>
        {children}
      </TransitionContainer>
    )}
  </Transition>
);

Fade.defaultProps = {
  timeout: 0,
};

Fade.propTypes = {
  in: Proptypes.bool.isRequired,
  timeout: Proptypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};

export default Fade;
