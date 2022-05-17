import { css, keyframes } from 'react-emotion';

const sunRadius = 80
const planetGap = 20

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
});

export const cssSun = css({
  width: sunRadius,
  height: sunRadius,
  backgroundColor: 'yellow',
  borderRadius: 40,
  position: 'relative',
});

export const cssPlanet = (nth = 1) => css({
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: getRandomColor(),
  transformOrigin: getTransformOrigin(nth),
  position: 'absolute',
  top: getPosition(nth),
  left: getPosition(nth),
  animation: `${rotate} ${3 + nth}s linear infinite`
});

const getPosition = (nth) => {
  return -planetGap * nth
}

const getTransformOrigin = (nth) => {
  const value = (sunRadius / 2) + (planetGap * nth)
  return `${value}px ${value}px`
}

const getRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}
