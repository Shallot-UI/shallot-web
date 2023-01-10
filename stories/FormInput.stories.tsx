import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME, DEFAULT_DARK_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/globals'
import { Column, Fold, FormInput, FormInputProps, Row } from '../src/components'

const meta: Meta = {
  title: 'Form Input',
  component: FormInput,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default meta

const Form = () => (
  <Column grow alignCenter alignMiddle backgroundColor="Shading.100">
    <Column>
      <FormInput
        label="Email"
        helperText="This is my input"
        unitsBelow={2}
        placeholder="Enter your email"
        value="test@gmail..com"
        errorText="Please enter a valid email address"
      />
      <FormInput
        label="Street Address"
        unitsBelow={2}
        placeholder="Enter your street address"
      />
      <Row unitsBelow={2}>
        <FormInput
          label="City"
          helperText="This is my input"
          unitsRight={1 / 2}
          placeholder="Enter your city"
        />
        <FormInput
          label="State / Province"
          helperText="This is my input"
          unitsLeft={1 / 2}
          placeholder="Enter your state / province"
        />
      </Row>
      <Row>
        <FormInput
          label="Country"
          helperText="This is my input"
          unitsRight={1 / 2}
          placeholder="Enter your country"
          required
          errorText="This field is required"
        />
        <FormInput
          label="Postal Code"
          helperText="This is my input"
          unitsLeft={1 / 2}
          placeholder="Enter your postal code"
        />
      </Row>
    </Column>
  </Column>
)

const Template: Story<FormInputProps> = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Fold>
      <Row grow>
        <Form />
        <ThemeProvider theme={DEFAULT_DARK_THEME}>
          <Form />
        </ThemeProvider>
      </Row>
    </Fold>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
