import { keyframes } from '@emotion/core'

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const flicker = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.5;
  }
`;

export const moveToTop = keyframes`
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: none;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.95);
  }
  66% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;