import { CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  TextAlignProps,
  UnderlineProps,
  SizingProps,
  FlexProps,
  LetterSpacingProps,
  TransitionProps,
  AnimationProps,
} from '@shallot-ui/theme'

import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnderline,
  getUnitsAround,
  getTextAlign,
  getSizing,
  getFlex,
  getLetterSpacing,
  getTransition,
} from '../../props'
import { getAnimation } from '../../props/Animation'

export interface TextStyleProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    UnderlineProps,
    SizingProps,
    FlexProps,
    LetterSpacingProps,
    TransitionProps,
    AnimationProps {}

export interface TextProps {
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
  children?: ReactNode
}

export const getTextStyle = (props: TextStyleProps = {}) => css`
  ${getFlex(props)}
  ${getFont(props)}
  ${getUnderline(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getTextAlign(props)}
  ${getSizing(props)}
  ${getLetterSpacing(props)}
  ${getTransition(props)}
  ${getAnimation(props)}
`

export const Text = styled.span<TextStyleProps>`
  ${getTextStyle}
`
