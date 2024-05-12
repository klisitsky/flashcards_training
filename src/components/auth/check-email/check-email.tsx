import { EmailIcon } from '@/assets'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'
export const CheckEmail = () => {
  return (
    <Card className={s.checkEmailContainer}>
      <Typography className={s.header} variant={'large'}>
        Check email
      </Typography>
      <div className={s.icon}>
        <EmailIcon />
      </div>
      <Typography className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={s.button} type={'submit'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
