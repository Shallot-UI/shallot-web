import { HTMLProps, Ref } from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  RadiusProps,
  SizingProps,
  UnitPaddingProps,
} from '@shallot-ui/theme'

import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getRadius,
  getBorder,
} from '../../props'
import { getUnitPadding } from '../../props/UnitsPadding'

export interface InputStateProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    UnitPaddingProps {
  glowColor?: keyof DefaultTheme['colors']
}

interface BaseInputProps {
  ref?: Ref<HTMLInputElement>
}

export interface InputStyleProps extends InputStateProps {
  states?: { [stateName: string]: InputStateProps }
}

export type InputProps = BaseInputProps & HTMLProps<HTMLInputElement> & {}

export const getInputStyle = (props: InputStateProps = {}) => css`
  ${getFont(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
  ${getUnitPadding(props)}
  ${getBorder(props)}
  ${({ theme }) =>
    props.glowColor
      ? `box-shadow: 0 0 0 4px ${theme.colors[props.glowColor]};`
      : ''}
`

const getStateStyles = (state?: string) => (
  props: InputStyleProps & ThemeProps<DefaultTheme>,
) => getInputStyle({ ...props, ...(state ? props.states?.[state] : {}) })

export const Input = styled.input<InputProps & InputStyleProps>`
  display: flex;
  border: 1px solid transparent;
  ${getInputStyle}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &:${state} {
          ${getStateStyles(state)}
        };
      `,
    )}
`
