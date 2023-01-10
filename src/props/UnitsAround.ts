import { UnitsAroundProps } from '@shallot-ui/theme'
import { css } from 'styled-components'

export const getUnitsAround = ({
  fullWidth,
  fullHeight,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
}: UnitsAroundProps) => {
  let styles = ''
  if (fullWidth) {
    styles += css`
      width: calc(
        100% -
          ${({ theme }) =>
            theme.gridUnits[0] * (unitsLeft ?? unitsAround ?? 0) +
            theme.gridUnits[0] * (unitsRight ?? unitsAround ?? 0)}px
      );
    `
  }
  if (fullHeight) {
    styles += css`
      height: calc(
        100% -
          ${({ theme }) =>
            theme.gridUnits[0] * (unitsAbove ?? unitsAround ?? 0) +
            theme.gridUnits[0] * (unitsBelow ?? unitsAround ?? 0)}px
      );
    `
  }
  if (typeof unitsAround === 'number') {
    styles += `margin: ${unitsAround * 12}px;`
  }
  if (typeof unitsAbove === 'number') {
    styles += `margin-top: ${unitsAbove * 12}px;`
  }
  if (typeof unitsBelow === 'number') {
    styles += `margin-bottom: ${unitsBelow * 12}px;`
  }
  if (typeof unitsLeft === 'number') {
    styles += `margin-left: ${unitsLeft * 12}px;`
  }
  if (typeof unitsRight === 'number') {
    styles += `margin-right: ${unitsRight * 12}px;`
  }
  return styles
}
