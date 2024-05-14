import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components'

export type FormTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'errorMessage' | 'name' | 'onBlur' | 'onChange' | 'value'>

const FormTextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: FormTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <TextField {...textFieldProps} {...field} errorMessage={error?.message} />
}

export default FormTextField
