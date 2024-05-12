import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckboxComponent } from '@/components'

const meta = {
  component: CheckboxComponent,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckboxComponent>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxStory: Story = {
  args: {},
  render: args => {
    const [checkedValue, setCheckedValue] = useState(false)

    return (
      <>
        <CheckboxComponent
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
        <CheckboxComponent
          {...args}
          checked={checkedValue}
          onCheckedHandler={() => setCheckedValue(!checkedValue)}
        />
      </>
    )
  },
}
