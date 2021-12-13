import styled from 'styled-components';
import { motion } from 'framer-motion';

const SidekickWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const SidekickOverlay = styled.div<{ overlayColor: string, isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ overlayColor, isActive }) => (isActive ? overlayColor : 'transparent')};
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  z-index: 0;
`;

const SidekickBody = styled(motion.div)<{ width: number }>`
  position: relative;
  z-index: 1;
  pointer-events: all;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100])};
  height: 100%;
  max-width: ${({ width }) => `${width}px`};
  position: relative;
  box-sizing: border-box;
	transform: translateX(-200px) translateZ(0px);
`;

export { SidekickBody, SidekickOverlay, SidekickWrapper };
