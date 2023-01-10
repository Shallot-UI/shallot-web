import { RichTextVariant, TextStyleProps } from '../../src/components'

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
