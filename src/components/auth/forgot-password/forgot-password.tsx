import { useForm } from 'react-hook-form'

import { Button, Card, ControlledInput, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './forgot-password.module.scss'

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordFormSchema) => void
}

type ForgotPasswordFormSchema = z.infer<typeof ForgotPasswordSchema>

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  })

  return (
    <Card className={s.forgotPassContainer}>
      <Typography className={s.header} variant={'large'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <Typography as={'p'} className={s.info} variant={'body2'}>
          Enter your email address and we will send you further instructions{' '}
        </Typography>
        <Button type={'submit'}>Send Instructions</Button>
        <Typography className={s.rememberPass} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography className={s.loggingIn} variant={'link1'}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
