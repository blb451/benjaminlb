// Modules
import styled from 'styled-components';

export const TransitionContainer = styled.div`
  transition: opacity ${props => props.timeout || 0}ms ease-in-out;
  opacity: ${props => (props.state === 'entered' ? 1 : 0)};
`;
