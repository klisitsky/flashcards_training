import { ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'

import s from './dropDownMenu.module.scss'

export type PopoverProps = {
  children?: ReactNode
  trigger: ReactNode
  userEmail?: string
  userName?: string
}

export const DropDownMenu = ({ children, trigger }: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button className={s.buttonWrapper}>{trigger}</button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className={s.popoverContent} sideOffset={10}>
          {children}
          <RadixPopover.Arrow className={s.popoverArrow} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
