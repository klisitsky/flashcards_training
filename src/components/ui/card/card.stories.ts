import { Card } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: '',
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '34.5rem',
      justifyContent: 'center',
      width: '26.25rem',
    },
  },
}
