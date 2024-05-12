import { ReactNode } from 'react'

import { Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { RxCross2 } from 'react-icons/rx'

import s from './modal.module.scss'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose?: (value: boolean) => void
  showCloseButton?: boolean
  title?: string
}

const dropIn = {
  exit: {
    opacity: 0,
    y: '100vh',
  },
  hidden: {
    opacity: 0,
    x: '-50%',
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    transition: {
      damping: 25,
      duration: 0.1,
      stiffness: 500,
      type: 'spring',
    },
    x: '0%',
    y: '-50%',
  },
}

export const Modal = ({ children, isOpen, onClose, showCloseButton, title }: ModalProps) => {
  const handleModalClose = () => {
    onClose?.(false)
  }

  return (
    <Dialog.Root onOpenChange={handleModalClose} open={isOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal>
            <Dialog.Overlay asChild className={s.dialogOverlay}>
              <motion.div
                animate={{ opacity: 1 }}
                className={s.overlay}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                onClick={handleModalClose}
              />
            </Dialog.Overlay>
            <Dialog.Content className={s.dialogContent}>
              <motion.div animate={'visible'} exit={'exit'} initial={'hidden'} variants={dropIn}>
                <div className={s.modal}>
                  {showCloseButton && (
                    <div className={s.titleWrapper}>
                      <Dialog.Title className={s.dialogTitle}>
                        <Typography as={'p'} className={s.title} variant={'h2'}>
                          {title}
                        </Typography>
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button aria-label={'Close'} className={s.closeMark}>
                          <RxCross2 />
                        </button>
                      </Dialog.Close>
                    </div>
                  )}
                  <div className={s.modalContent}>{children}</div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
