import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'Select-box 1',
    placeholder: 'Select-box 1',
    selectOptions: [
      { value: 'Select-box 1' },
      { disabled: true, value: 'Select-box 2' },
      { value: 'Select-box 3' },
    ],
  },
}
