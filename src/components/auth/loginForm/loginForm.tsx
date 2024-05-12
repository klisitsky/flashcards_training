import { useController, useForm } from 'react-hook-form'

import { Button, CheckboxComponent, TextField } from '@/components'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <CheckboxComponent checked={value} label={'rememberMe'} onCheckedHandler={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
