import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

type TabContentProps = ComponentPropsWithoutRef<typeof RadixTabs.Content>

export const TabContent = ({ children, className, value }: TabContentProps) => {
  return (
    <RadixTabs.Content className={className} value={value}>
      {children}
    </RadixTabs.Content>
  )
}
