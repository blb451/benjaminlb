// Modules
import styled from 'styled-components';
import { colors } from 'config/style.constant';

export default styled.div`
  width: 100%;
  height: 75px;
  left: 0px;
  bottom: 0px;
  margin-top: 20px;
  content: '';
  position: absolute;
  background: linear-gradient(135deg, ${colors.background} 25%, transparent 25%) -64px 0,
    linear-gradient(225deg, ${colors.background} 25%, transparent 25%) -64px 0,
    linear-gradient(45deg, transparent 25%, transparent 25%);
  background-size: 128px 128px;
  background-color: ${colors.decoration};
`;
