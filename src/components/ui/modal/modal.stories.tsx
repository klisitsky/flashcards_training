import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button, Modal, Select, TextField } from '@/components'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalStory: Story = {
  args: {
    children: '',
    isOpen: true,
    showCloseButton: true,
    title: 'Title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    function handleModalOpened() {
      setOpen(true)
    }

    function handleModalClosed(value: boolean) {
      setOpen(value)
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal
          isOpen={open}
          onClose={handleModalClosed}
          showCloseButton={args.showCloseButton}
          title={args.title}
        >
          <Select
            defaultValue={'Select-box'}
            selectOptions={[
              { value: 'Select-box 1' },
              { value: 'Select-box 2' },
              { value: 'Select-box 3' },
            ]}
          />
          <TextField type={'search'} />
          <TextField type={'search'} />
        </Modal>
      </>
    )
  },
}
