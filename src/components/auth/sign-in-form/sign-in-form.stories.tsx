import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
