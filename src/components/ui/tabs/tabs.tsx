import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabType = {
  label: string
  value: string
}

type TabsProps = {
  disabled?: boolean
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

const Tabs = ({ children, disabled, onValueChange, tabs }: TabsProps) => {
  const changeValueHandler = (value: string) => {
    onValueChange?.(value)
  }

  return (
    <RadixTabs.Root
      className={s.tabsRoot}
      defaultValue={tabs[0].value}
      onValueChange={changeValueHandler}
    >
      <RadixTabs.List className={s.tabsList}>
        {tabs.map((tab, index) => (
          <RadixTabs.Trigger
            className={s.tabsTrigger}
            disabled={disabled}
            key={index}
            value={disabled ? '' : tab.value}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {children}
    </RadixTabs.Root>
  )
}

export default Tabs
