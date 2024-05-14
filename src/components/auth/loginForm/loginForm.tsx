import { useForm } from 'react-hook-form'

import { Button } from '@/components'
import { FormCheckbox } from '@/components/ui/controlled/form-checkbox/form-checkbox'
import FormTextField from '@/components/ui/controlled/form-textField/form-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTextField control={control} label={'email'} name={'email'} />
      <FormTextField control={control} label={'password'} name={'password'} />
      <FormCheckbox control={control} label={'remember Me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
