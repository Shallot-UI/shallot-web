// styled.d.ts
import THEME from './src/theme'
import 'styled-components'

type Theme = typeof THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
