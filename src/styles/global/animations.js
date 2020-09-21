import styled, { keyframes } from "styled-components"

export const animations = {
  spin: keyframes`
    0% {
      transform: scale(1) rotate(0deg);
    }

    50% {
      transform: scale(1.5) rotate(180deg);
    }

    100% {
      transform: scale(1) rotate(360deg);
    }`,

  pulse: keyframes`
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }`
}