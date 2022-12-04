import React, {
  CSSProperties,
  FunctionComponent,
  HTMLProps,
  ReactNode,
} from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  TransitionProps,
  CursorProps,
} from '@shallot-ui/theme'

import { getBoxStyle } from '../Box'
import { getTextStyle, TextProps, TextStyleProps } from '../Text'

interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {
  style?: Partial<CSSProperties>
}

interface ButtonStateProps {
  containerProps?: ContainerStyleProps
  labelProps?: TextStyleProps
}

export interface ButtonStyleProps
  extends ButtonStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: ButtonStateProps }
  style?: Partial<CSSProperties>
}

export interface ButtonProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'> {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined

  leftDecoration?: ReactNode
  rightDecoration?: ReactNode
}

const Label = styled.span``

const getStateStyles = (state?: string) => (
  props: ButtonStyleProps & ThemeProps<DefaultTheme>,
) => css`
  ${getBoxStyle({
    ...props?.containerProps,
    ...(state ? props.states?.[state]?.containerProps : {}),
  })}
  ${Label} {
    ${getTextStyle({
      ...props?.labelProps,
      ...(state ? props.states?.[state]?.labelProps : {}),
    })}
  }
`

const Container = styled.button<ButtonStyleProps>`
  border: none;
  display: inline-flex;
  ${getBoxStyle}
  ${getStateStyles()}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &:${state} {
          ${getStateStyles(state)}
        };
      `,
    )}
`

export const Button: FunctionComponent<ButtonProps & ButtonStyleProps> = ({
  title,
  as,
  ref,

  leftDecoration,
  rightDecoration,

  ...rest
}) => (
  <Container {...rest}>
    {leftDecoration}
    <Label>{title}</Label>
    {rightDecoration}
  </Container>
)
