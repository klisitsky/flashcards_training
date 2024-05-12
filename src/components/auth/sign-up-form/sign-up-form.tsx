import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/components/ui/typography/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

import { Button } from '../../ui/button'

type SignUpFormSchema = z.infer<typeof SignUpSchema>

const SignUpSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  })

  const onSubmit = (data: SignUpFormSchema) => {
    console.log(data)
  }

  return (
    <Card className={s.formContainer}>
      <Typography className={s.header} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledInput
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <ControlledInput
          control={control}
          errorMessage={errors.confirmPassword?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          type={'password'}
        />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
        <Typography className={s.haveAccount} variant={'link1'}>
          Already have an account?
        </Typography>
        <Typography className={s.signIn} variant={'link1'}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
