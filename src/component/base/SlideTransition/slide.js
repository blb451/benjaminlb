// Modules
import { injectGlobal, keyframes } from 'styled-components';

const DURATION = 900;

const slideOut = keyframes`
  0%, 25% { transform: translateX(0); }
  100% { transform: translateX(-200%); }
`;
const slideIn = keyframes`
  0%, 25% { transform: translateX(200%); }
  100% { transform: translateX(0); }
`;

injectGlobal`
.slide-exit-active {
  animation: ${slideOut} ${DURATION}ms both ease;
}
.slide-enter-active {
  animation: ${slideIn} ${DURATION}ms both ease;
}
`;
