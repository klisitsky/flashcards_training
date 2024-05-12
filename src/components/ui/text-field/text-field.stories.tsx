import { useState } from 'react'

import { TextField } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Default Input',
    type: 'text',
  },
}

export const WithError: Story = {
  args: {
    errorMessage: 'Error',
    label: 'Input',
    placeholder: 'Error',
    type: 'text',
  },
}

export const WithEyeIcon: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input with password',
    type: 'password',
  },
}

export const WithSearchIcon: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input with search',
    type: 'search',
    value: 'asdasdasd',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Just Input',
    type: 'text',
  },
}

export const WithSearchIconWithUseState: Story = {
  args: {},
  render: () => {
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
          placeholder={'Input with search'}
          type={'search'}
          value={text}
        />
      </>
    )
  },
}
