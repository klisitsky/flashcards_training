import { ComponentPropsWithoutRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { IoMdCheckmark } from 'react-icons/io'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedHandler?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof Checkbox.Root>

export const CheckboxComponent = ({
  checked = false,
  className,
  disabled,
  label,
  onCheckedHandler,
}: CheckboxProps) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={`${s.checkboxWrapper} ${disabled ? s.disabled : ''}`}>
        <Checkbox.Root
          checked={checked}
          className={s.checkbox}
          disabled={disabled}
          id={'c1'}
          onCheckedChange={onCheckedHandler}
        >
          <Checkbox.Indicator className={s.checkboxIndicator}>
            <IoMdCheckmark className={s.checkboxIcon} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label className={s.label} htmlFor={'c1'}>
        {label}
      </label>
    </div>
  )
}
