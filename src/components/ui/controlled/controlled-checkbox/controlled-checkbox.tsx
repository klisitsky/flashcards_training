import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onCheckedHandler'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...restProps} checked={value} onCheckedChange={onChange} />
}
