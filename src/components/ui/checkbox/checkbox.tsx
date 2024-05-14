import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { IoMdCheckmark } from 'react-icons/io'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = ({
  checked = false,
  className,
  disabled,
  id,
  label,
  onCheckedChange,
}: CheckboxProps) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={`${s.checkboxWrapper} ${disabled ? s.disabled : ''}`}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={onCheckedChange}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator}>
            <IoMdCheckmark className={s.checkboxIcon} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
