import {
  CheckboxStyleProps,
  RichTextVariant,
  TextStyleProps,
} from '../../src/components'

export const defaultCheckboxVariant: CheckboxStyleProps = {
  containerProps: {
    radius: 'sm',
    cursor: 'pointer',
    unitHeight: 2,
    unitWidth: 2,
    backgroundColor: 'Shading.100',
    borderColor: 'Primary.300',
    transition: 'background-color 0.2s ease-in-out',
  },
  fillProps: {
    backgroundColor: 'Primary.300',
    radius: 'sm',
    unitHeight: 2,
    unitWidth: 2,
    animation: 'fadeIn',
    alignMiddle: true,
    alignCenter: true,
  },
  checkmarkProps: {
    unitHeight: 4 / 3,
    unitWidth: 4 / 3,
    fillColor: 'Shading.100',
    animation: 'fadeInUp',
  },
  states: {
    hover: {
      containerProps: {
        backgroundColor: 'Primary.100',
      },
    },
  },
}

export const defaultInputVariant = {
  fontSize: 'md',
  backgroundColor: 'Shading.125',
  borderColor: 'Shading.250',
  radius: 'md',
  style: {
    padding: 12,
  },
  states: {
    disabled: {
      fontSize: 'md',
      backgroundColor: 'Shading.150',
      radius: 'md',
      style: {
        padding: 12,
      },
    },
    focused: {
      fontSize: 'md',
      borderColor: 'Primary.300',
      backgroundColor: 'Shading.150',
      radius: 'md',
      style: {
        padding: 12,
      },
    },
  },
}

export const H1: TextStyleProps = {
  fontSize: 'xl',
  textColor: 'foreground',
  font: 'Bold',
  lineHeight: 'md',
}

export const H2: TextStyleProps = {
  fontSize: 'lg',
  textColor: 'foreground',
  font: 'Bold',
}

export const H3: TextStyleProps = {
  textColor: 'foreground',
  font: 'Bold',
}

export const paragraph: TextStyleProps = {
  fontSize: 'md',
  lineHeight: 'lg',
}

export const longformRichText: RichTextVariant = {
  heading1: { ...H1, unitsBelow: 2 },
  heading2: { ...H2, unitsBelow: 2 },
  heading3: { ...H3, unitsBelow: 2 },
  paragraph: { ...paragraph, unitsBelow: 2 },
}

export const DEFAULT_VARIANTS = {
  'Input.Default': {
    fontSize: 'md',
    backgroundColor: 'Shading.150',
    radius: 'md',
    paddingAround: 1,
    unitsAbove: 1 / 2,
    unitsBelow: 1 / 2,
    style: {
      padding: 12,
    },
  },

  'Button.Primary.Container': {
    interactive: true,
    elevation: 'md',
    backgroundColor: 'Primary.300',
    hoverBackgroundColor: 'Primary.250',
    radius: 'md',
  },
  'Button.Primary.Label': {
    font: 'Bold',
    textColor: 'Shading.100',
    letterSpacing: 'md',
    unitsAround: 1,
    flex: 1,
    alignCenter: true,
    alignMiddle: true,
    centerText: true,
  },

  'Button.Hint.Container': {
    interactive: true,
    borderColor: 'Shading.200',
    backgroundColor: 'Shading.200',
    radius: 'pill',
  },
  'Button.Hint.Label': {
    font: 'Bold',
    textColor: 'Shading.300',
    fontSize: 'sm',
    letterSpacing: 'sm',
    unitsAround: 3 / 4,
    flex: 1,
    alignCenter: true,
    alignMiddle: true,
    centerText: true,
  },

  'Text.Eyebrow': {
    fontSize: 'md',
    textColor: 'foreground',
    uppercase: true,
  },
  'Text.Description': {
    lineHeight: 'xl',
    fontSize: 'md',
  },
  'Link.Default': {
    textColor: 'Primary.300',
    underline: 'hover',
  },
  'Link.Muted': {
    textColor: 'Shading.300',
    underline: 'hover',
  },

  'FormInput.Default.Label': {
    font: 'Bold',
    letterSpacing: 'md',
  },
  'FormInput.Default.LabelRow': {
    unitsAbove: 1,
    unitsBelow: 1 / 2,
  },
  'FormInput.Default.Container': {},
  'FormInput.Default.Error': {},
  'FormInput.Default.Helper': {},
}
