import { css, keyframes } from 'styled-components'
import { AnimationProps } from '@shallot-ui/theme'

const fadeInKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeInUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const fadeInDownKeyframes = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

export const getAnimation = ({ animation }: AnimationProps) => () => {
  if (animation === 'fadeIn') {
    return css`
      animation: ${fadeInKeyframes} 0.4s ease-in-out;
    `
  } else if (animation === 'fadeInUp') {
    return css`
      animation: ${fadeInUpKeyframes} 0.4s ease-in-out;
    `
  } else if (animation === 'fadeInDown') {
    return css`
      animation: ${fadeInDownKeyframes} 0.4s ease-in-out;
    `
  }

  return ''
}
