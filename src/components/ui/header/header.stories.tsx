import type { Meta, StoryObj } from '@storybook/react'

import headerLogo from '@/assets/img/logo.svg'
import userPhotoUrl from '@/assets/img/profile.png'
import { Button, Header } from '@/components'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const headerStyle = {
  alignItems: 'center',
  backgroundColor: 'var(--color-dark-500)',
  display: 'flex',
  height: '60px',
  justifyContent: 'space-between',
  padding: '0 136px',
  width: '100%',
}

const logoStyle = { height: '36px', width: '156.48px' }

export const LogIn: Story = {
  render: () => {
    return (
      <Header style={headerStyle}>
        <img alt={'Logo'} src={headerLogo} style={logoStyle} />
        <Button>Sign In</Button>
      </Header>
    )
  },
}

export const LogOut: Story = {
  render: () => {
    return (
      <Header style={headerStyle}>
        <img alt={'Logo'} src={headerLogo} style={logoStyle} />
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <span
            style={{
              borderBottom: '2px dashed var(--color-light-100)',
              fontWeight: 'var(--font-weight-bold)',
              marginRight: '14px',
            }}
          >
            Ivan
          </span>
          <img
            alt={'userPhoto'}
            src={userPhotoUrl}
            style={{
              borderRadius: '50%',
              height: '36px',
              width: '36px',
            }}
          />
        </div>
      </Header>
    )
  },
}

// <Button>Sign In</Button>
