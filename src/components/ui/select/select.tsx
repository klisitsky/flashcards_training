import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'
import { HiOutlineChevronDown } from 'react-icons/hi'

import s from './select.module.scss'

export type Options = {
  disabled?: boolean
  label?: string
  value: string
}
type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: ReactNode
  selectOptions: Options[]
  value?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (
    {
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      placeholder,
      selectOptions,
      value,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Typography
          as={'label'}
          className={`${s.label} ${disabled && s.labelDisabled}`}
          variant={'body2'}
        >
          {label}
        </Typography>
        <SelectRadix.Root
          defaultValue={defaultValue}
          disabled={disabled}
          onValueChange={onValueChange}
          required={restProps.required}
          value={value}
        >
          <SelectRadix.Trigger className={`${s.trigger} ${className}`} ref={ref} tabIndex={1}>
            <SelectRadix.Value placeholder={placeholder} />
            <HiOutlineChevronDown className={s.icon} />
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content
              className={s.content}
              position={'popper'}
              ref={ref}
              sideOffset={-1}
            >
              <SelectRadix.Viewport>
                {selectOptions.map(option => {
                  return (
                    <SelectRadix.Item
                      className={s.item}
                      disabled={option.disabled}
                      key={option.value}
                      value={option.value}
                    >
                      <SelectRadix.ItemText>{option.value}</SelectRadix.ItemText>
                    </SelectRadix.Item>
                  )
                })}
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </>
    )
  }
)
