import type { Meta, StoryObj } from '@storybook/react'

import userPhotoUrl from '@/assets/img/profile.png'
import { Button, DropDownMenu, DropDownMenuProfileInfo, ProfileIcon } from '@/components'
import { BiEditAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { LuPlayCircle } from 'react-icons/lu'
import { MdOutlineDelete } from 'react-icons/md'

import s from './dropDownMenu.module.scss'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const WithProfile: Story = {
  args: {
    trigger: <ProfileIcon userPhotoUrl={userPhotoUrl} />,
    userEmail: 'j&johnson@gmail.com',
    userName: 'Ivan',
  },

  render: ({ trigger, userEmail, userName }) => {
    return (
      <DropDownMenu trigger={trigger}>
        <DropDownMenuProfileInfo
          userEmail={userEmail}
          userName={userName}
          userPhotoUrl={userPhotoUrl}
        />
        <Button className={s.popoverItemContainer} icon={HiOutlineUser}>
          children
        </Button>
        <Button className={s.popoverItemContainer} icon={FiLogOut}>
          Sign Out
        </Button>
      </DropDownMenu>
    )
  },
}

export const Usual: Story = {
  args: {
    trigger: <button></button>,
  },
  render: ({ trigger }) => {
    return (
      <DropDownMenu trigger={trigger}>
        <Button className={s.popoverItemContainer} icon={LuPlayCircle}>
          Learn
        </Button>
        <Button className={s.popoverItemContainer} icon={BiEditAlt}>
          Edit
        </Button>
        <Button className={s.popoverItemContainer} icon={MdOutlineDelete}>
          Delete
        </Button>
      </DropDownMenu>
    )
  },
}
