import type { Meta, StoryObj } from '@storybook/react'

import { TabContent } from '@/components/ui/tabs/tabContent/tabContent'
import Tabs from '@/components/ui/tabs/tabs'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

const tabs = [
  {
    label: 'Switcher',
    value: 'tab1',
  },
  {
    label: 'Switcher',
    value: 'tab2',
  },
  {
    label: 'Switcher',
    value: 'tab3',
  },
]

export const TabsDefault: Story = {
  args: {
    children: (
      <>
        <TabContent value={'tab1'}>
          <p>Content 1</p>
        </TabContent>
        <TabContent value={'tab2'}>
          <p>Content 2</p>
        </TabContent>
        <TabContent value={'tab3'}>
          <p>Content 3</p>
        </TabContent>
      </>
    ),
    disabled: false,
    tabs,
  },
}

export const TabsDisabled: Story = {
  args: {
    disabled: true,
    tabs,
  },
}
