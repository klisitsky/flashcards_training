import { CreateNewPassword } from '@/components'
import { StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
}

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
