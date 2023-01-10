import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { Column, Text, TextProps } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Hello world',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TextProps> = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Column>
      <Text {...args} />
      <Text textColor="Primary.100" {...args} />
      <Text textColor="Primary.200" {...args} />
      <Text textColor="Primary.300" {...args} />
      <Text textColor="Primary.400" {...args} />
      <Text textColor="Primary.500" {...args} />
      <Text lineHeight="sm" fontSize="md" unitsAbove={2}>
        Nulla tempor feugiat dolor vulputate commodo. Phasellus consequat mauris
        metus, placerat efficitur tortor imperdiet ut. Nam vitae congue ante.
        Maecenas id est sit amet turpis scelerisque viverra eu a quam. Curabitur
        nulla dui, feugiat eget lacus ut, laoreet bibendum velit. Vivamus
        tincidunt, nisl eget commodo blandit, augue velit rhoncus justo, nec
        porta massa risus at libero. In nisi est, ultricies ac velit ut,
        dignissim ornare urna.
      </Text>
      <Text lineHeight="md" fontSize="md" unitsAbove={2}>
        Nulla tempor feugiat dolor vulputate commodo. Phasellus consequat mauris
        metus, placerat efficitur tortor imperdiet ut. Nam vitae congue ante.
        Maecenas id est sit amet turpis scelerisque viverra eu a quam. Curabitur
        nulla dui, feugiat eget lacus ut, laoreet bibendum velit. Vivamus
        tincidunt, nisl eget commodo blandit, augue velit rhoncus justo, nec
        porta massa risus at libero. In nisi est, ultricies ac velit ut,
        dignissim ornare urna.
      </Text>
      <Text lineHeight="lg" fontSize="md" unitsAbove={2}>
        Nulla tempor feugiat dolor vulputate commodo. Phasellus consequat mauris
        metus, placerat efficitur tortor imperdiet ut. Nam vitae congue ante.
        Maecenas id est sit amet turpis scelerisque viverra eu a quam. Curabitur
        nulla dui, feugiat eget lacus ut, laoreet bibendum velit. Vivamus
        tincidunt, nisl eget commodo blandit, augue velit rhoncus justo, nec
        porta massa risus at libero. In nisi est, ultricies ac velit ut,
        dignissim ornare urna.
      </Text>
      <Text lineHeight="xl" fontSize="md" unitsAbove={2}>
        Nulla tempor feugiat dolor vulputate commodo. Phasellus consequat mauris
        metus, placerat efficitur tortor imperdiet ut. Nam vitae congue ante.
        Maecenas id est sit amet turpis scelerisque viverra eu a quam. Curabitur
        nulla dui, feugiat eget lacus ut, laoreet bibendum velit. Vivamus
        tincidunt, nisl eget commodo blandit, augue velit rhoncus justo, nec
        porta massa risus at libero. In nisi est, ultricies ac velit ut,
        dignissim ornare urna.
      </Text>
    </Column>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
