import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type Item = {
  disabled?: boolean
  id: string
  label: string
  required?: boolean
  value: string
}

export type RadioGroupProps = {
  callback?: (value: string) => void
  disabled?: boolean
  items: Item[]
  required?: boolean
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ callback, disabled, items, required, ...rest }: RadioGroupProps, ref) => {
    const changeValueHandler = (value: string) => {
      callback?.(value)
    }

    return (
      <RadixRadioGroup.Root
        aria-label={'View density'}
        className={s.radioGroupRoot}
        defaultValue={'default'}
        disabled={disabled}
        onValueChange={changeValueHandler}
        ref={ref}
        required={required}
        {...rest}
      >
        {items.map(item => {
          return (
            <div className={s.radioGroupItemSwapper} key={item.id}>
              <RadixRadioGroup.Item
                className={s.radioGroupItem}
                disabled={item.disabled}
                id={item.id}
                required={item.required}
                value={item.value}
              >
                <RadixRadioGroup.Indicator className={s.radioGroupIndicator} />
              </RadixRadioGroup.Item>
              <label htmlFor={item.id}>
                <Typography className={`${s.label} ${disabled ? s.labelDisabled : ''}`}>
                  {item.label}
                </Typography>
              </label>
            </div>
          )
        })}
      </RadixRadioGroup.Root>
    )
  }
)
