import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/components'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderDefault: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState<number[]>([2, 9])

    return (
      <Slider
        defaultValue={defaultValue}
        max={10}
        onValueChange={setDefaultValue}
        step={1}
      ></Slider>
    )
  },
}
