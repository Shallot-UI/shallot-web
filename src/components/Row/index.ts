import { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import {
  VerticalAlignmentProps,
  HorizontalAlignmentProps,
} from '@shallot-ui/theme'

import { Box, BoxProps, BoxStyleProps, getBoxStyle } from '../Box'
import { getHorizontalAlignment, getVerticalAlignment } from '../../props'

export interface RowStyleProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxStyleProps {
  wrap?: boolean
  style?: Partial<CSSProperties>
}

export interface RowProps extends BoxProps {}

export const getRowStyle = (props: RowStyleProps) => css<RowStyleProps>`
  flex-direction: row;
  ${({ wrap }) => (wrap ? 'flex-wrap: wrap;' : '')}
  ${getBoxStyle(props)}
  ${getVerticalAlignment('column')(props)}
  ${getHorizontalAlignment('column')(props)}
`

export const Row = styled(Box)<RowProps & RowStyleProps>`
  ${getRowStyle}
`
