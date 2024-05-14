import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/components'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxStory: Story = {
  args: {},
  render: args => {
    const [checkedValue, setCheckedValue] = useState(false)

    return (
      <>
        <Checkbox
          {...args}
          checked={checkedValue}
          onCheckedHandler={() => setCheckedValue(!checkedValue)}
        />
      </>
    )
  },
}

export const CheckboxStoryDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const CheckboxStoryWithLabel: Story = {
  args: {
    label: 'Checkbox',
  },
  render: args => {
    const [checkedValue, setCheckedValue] = useState(false)

    return (
      <>
        <Checkbox
          {...args}
          checked={checkedValue}
          onCheckedHandler={() => setCheckedValue(!checkedValue)}
        />
      </>
    )
  },
}
