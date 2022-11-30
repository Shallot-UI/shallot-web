import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { Button, Column, Modal, ModalProps, Text } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Modal',
  component: Modal,
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

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <Column>
        <Button
          type="button"
          title="Open Modal"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <Text unitsAround={10}>Test Modal</Text>
          </Modal>
        )}
      </Column>
    </ThemeProvider>
  )
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
