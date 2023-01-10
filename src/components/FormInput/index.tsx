import React, {
  CSSProperties,
  FunctionComponent,
  HTMLProps,
  useCallback,
  useState,
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
import { getInputStyle, InputStateProps } from '../Input'
import { formInputDefaultStyle } from './style'

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

interface FormInputStateProps {
  containerProps?: ContainerStyleProps
  inputProps?: InputStateProps
  labelProps?: TextStyleProps
  helperTextProps?: TextStyleProps
  errorTextProps?: TextStyleProps
}

export interface FormInputStyleProps
  extends FormInputStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: FormInputStateProps }
  style?: Partial<CSSProperties>
}

export interface FormInputProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLInputElement>, 'style' | 'height' | 'width'> {
  initialValue?: string
  label?: string
  errorText?: string
  helperText?: string
}

const Input = styled.input`
  display: flex;
  border: 2px solid transparent;
  outline: none;
  transition: border-color 250ms ease-in-out, box-shadow 400ms ease-in-out;
`
const Label = styled.span``
const HelperText = styled.span`
  transition: color 250ms ease-in-out;
`
const ErrorText = styled.span``
const RequiredStar = styled.span.attrs({ children: '*' })`
  color: ${({ theme }) => theme.colors['Danger.300']};
`

type FormInputState = 'disabled' | 'focused' | 'populated' | 'error'

const getStateStyles = (state?: string) => (
  props: FormInputStyleProps & ThemeProps<DefaultTheme>,
) => css`
  ${getBoxStyle({
    ...props?.containerProps,
    ...(state ? props.states?.[state]?.containerProps : {}),
  })}
  ${Input} {
    ${getInputStyle({
      ...props?.inputProps,
      ...(state ? props.states?.[state]?.inputProps : {}),
    })}
  }
  ${Label} {
    ${getTextStyle({
      ...props?.labelProps,
      ...(state ? props.states?.[state]?.labelProps : {}),
    })}
  }
  ${HelperText} {
    ${getTextStyle({
      ...props?.helperTextProps,
      ...(state ? props.states?.[state]?.helperTextProps : {}),
    })}
  }
  ${ErrorText} {
    ${getTextStyle({
      ...props?.errorTextProps,
      ...(state ? props.states?.[state]?.errorTextProps : {}),
    })}
  }
`

const Container = styled.div<
  FormInputStyleProps & Record<FormInputState, boolean | undefined>
>`
  display: flex;
  flex-direction: column;
  ${getBoxStyle}
  ${getStateStyles()}

  ${(props) => (props.disabled ? getStateStyles('disabled')(props) : '')}
  ${(props) => (props.focused ? getStateStyles('focused')(props) : '')}
  ${(props) => (props.populated ? getStateStyles('populated')(props) : '')}
  ${(props) => (props.error ? getStateStyles('error')(props) : '')}
`

export const FormInput: FunctionComponent<FormInputProps &
  FormInputStyleProps> = ({
  ref,
  as,

  value,

  onFocus,
  onBlur,

  label,
  errorText,
  helperText,

  states,
  containerProps,
  labelProps,
  inputProps,
  errorTextProps,
  helperTextProps,

  grow,
  flex,
  shrink,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,

  disabled,
  required,

  children,

  ...rest
}) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  return (
    <Container
      focused={focused}
      disabled={disabled}
      populated={Boolean(value)}
      error={Boolean(errorText)}
      states={states}
      {...formInputDefaultStyle}
      containerProps={{
        ...formInputDefaultStyle.containerProps,
        ...containerProps,
      }}
      labelProps={{
        ...formInputDefaultStyle.labelProps,
        ...labelProps,
      }}
      inputProps={{
        ...formInputDefaultStyle.inputProps,
        ...inputProps,
      }}
      errorTextProps={{
        ...formInputDefaultStyle.errorTextProps,
        ...errorTextProps,
      }}
      helperTextProps={{
        ...formInputDefaultStyle.helperTextProps,
        ...helperTextProps,
      }}
      // Container Style Props
      grow={grow}
      flex={flex}
      shrink={shrink}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      unitWidth={unitWidth}
      minUnitWidth={minUnitWidth}
      maxUnitWidth={maxUnitWidth}
      unitHeight={unitHeight}
      minUnitHeight={minUnitHeight}
      maxUnitHeight={maxUnitHeight}
    >
      <Label>
        {label}
        {required && <RequiredStar />}
      </Label>
      <Input
        {...rest}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {!errorText && helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  )
}
