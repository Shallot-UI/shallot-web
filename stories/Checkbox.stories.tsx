import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/globals'
import { Checkbox, CheckboxProps, Fold, Row, Text } from '../src/components'

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <Fold alignCenter alignMiddle backgroundColor="Shading.100">
        <Row alignMiddle>
          <Checkbox value={value} setValue={setValue} id="checkbox" />
          <Text
            as="label"
            htmlFor="checkbox"
            unitsLeft={1 / 2}
            style={{ display: 'block', userSelect: 'none' }}
          >
            Testing
          </Text>
        </Row>
      </Fold>
    </ThemeProvider>
  )
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
