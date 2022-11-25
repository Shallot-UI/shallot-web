import { CSSProperties, HTMLProps, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  CursorProps,
  TransitionProps,
  AnimationProps,
} from '@shallot-ui/theme'

import {
  getColors,
  getUnitsAround,
  getTransition,
  getRadius,
  getSizing,
  getFlex,
  getElevation,
  getCursor,
} from '../../props'
import { getAnimation } from '../../props/Animation'

type DivProps = HTMLProps<HTMLDivElement>

export interface BoxStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    CursorProps,
    TransitionProps,
    AnimationProps {
  style?: Partial<CSSProperties>
}

export interface BoxProps {
  onClick?: DivProps['onClick']
  interactive?: boolean
  children?: ReactNode
}

export const getBoxStyle = (props: BoxStyleProps = {}) => css<BoxStyleProps>`
  display: flex;
  position: relative;
  border-style: solid;
  ${getFlex(props)}
  ${getSizing(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getRadius(props)}
  ${getElevation(props)}
  ${getCursor(props)}
  ${getTransition(props)}
  ${getAnimation(props)}
`

export const Box = styled.div<BoxStyleProps>`
  ${getBoxStyle}
`
