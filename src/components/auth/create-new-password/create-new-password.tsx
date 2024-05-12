import { useForm } from 'react-hook-form'

import { Button, Card, ControlledInput, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './create-new-password.module.scss'

type CreateNewPassFormSchema = z.infer<typeof CreateNewPasswordSchema>

type CreateNewPasswordProps = {
  onSubmit: () => void
}
const CreateNewPasswordSchema = z.object({
  password: z.string().min(3),
})

export const CreateNewPassword = ({ onSubmit }: CreateNewPasswordProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateNewPassFormSchema>({
    resolver: zodResolver(CreateNewPasswordSchema),
  })

  return (
    <Card className={s.createNewPassContainer}>
      <Typography className={s.header} variant={'large'}>
        Create new Password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <Typography as={'p'} className={s.info} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
