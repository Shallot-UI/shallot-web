import { BorderProps } from '@shallot-ui/theme'

export const getBorder = ({ borderWidth, borderColor }: BorderProps) => () => {
  if (borderWidth) {
    return `border-width: ${borderWidth}px;`
  } else if (borderColor) {
    return 'border-width: 1px;'
  }

  return ''
}
