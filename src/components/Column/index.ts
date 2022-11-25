import { CSSProperties } from 'react'
import styled, { css } from 'styled-components'

import { Box, BoxProps, BoxStyleProps, getBoxStyle } from '../Box'
import { getHorizontalAlignment, getVerticalAlignment } from '../../props'
import {
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

export interface ColumnStyleProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxStyleProps {
  style?: Partial<CSSProperties>
}

export interface ColumnProps extends BoxProps {}

export const getColumnStyle = (props: ColumnStyleProps) => css<
  ColumnStyleProps
>`
  flex-direction: column;
  ${getBoxStyle(props)}
  ${getVerticalAlignment('column')(props)}
  ${getHorizontalAlignment('column')(props)}
`

export const Column = styled(Box)<ColumnProps & ColumnStyleProps>`
  ${getColumnStyle}
`
