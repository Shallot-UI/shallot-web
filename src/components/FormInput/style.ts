import { FormInputStyleProps } from '..'

export const formInputDefaultStyle: FormInputStyleProps = {
  fullWidth: true,
  unitsAround: 1,
  labelProps: {
    textColor: 'Shading.400',
    letterSpacing: 'sm',
    font: 'Medium',
    fontSize: 'sm',
    unitsBelow: 1,
  },
  inputProps: {
    fontSize: 'sm',
    textColor: 'Shading.500',
    backgroundColor: 'Shading.100',
    borderColor: 'Shading.250',
    unitPadding: 1,
    borderWidth: 2,
    radius: 'sm',
  },
  helperTextProps: {
    fontSize: 'sm',
    textColor: 'Shading.275',
    unitsAbove: 1 / 2,
  },
  errorTextProps: {
    fontSize: 'sm',
    textColor: 'Danger.300',
    unitsAbove: 1 / 2,
    animation: 'fadeInDown',
  },
  states: {
    error: {
      inputProps: {
        borderColor: 'Danger.300',
        glowColor: 'Danger.100',
      },
    },
    disabled: {
      inputProps: {
        backgroundColor: 'Shading.150',
      },
    },
    focused: {
      inputProps: {
        borderColor: 'Primary.300',
        glowColor: 'Shading.150',
      },
    },
  },
}
