import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '@/components'

const meta = {
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Auth/PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoStory: Story = {
  args: {
    email: 'myEmail.com',
    name: 'DefaultUser',
    onSubmit: data => console.info(data),
  },
}
