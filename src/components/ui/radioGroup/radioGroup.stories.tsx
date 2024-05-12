import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  { id: '1', label: 'RadioGroup 1', value: 'RadioGroup_1' },
  { id: '2', label: 'RadioGroup 2', value: 'RadioGroup_2' },
  { id: '3', label: 'RadioGroup 3', value: 'RadioGroup_3' },
  { id: '4', label: 'RadioGroup 4', value: 'RadioGroup_4' },
]

export const RadioGroupDefault: Story = {
  args: {
    disabled: false,
    items,
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
    items,
  },
}
