import { ProfileIcon } from '@/components'
import { Typography } from '@/components'

import s from './dropDownMenuProfileInfo.module.scss'
export type PopoverProfileInfoProps = {
  userEmail?: string
  userName?: string
  userPhotoUrl?: string
}

export const DropDownMenuProfileInfo = ({
  userEmail,
  userName,
  userPhotoUrl,
}: PopoverProfileInfoProps) => {
  return (
    <div className={s.ProfileInfoContainer}>
      <ProfileIcon userPhotoUrl={userPhotoUrl} />
      <div className={s.profileTextInfo}>
        <Typography className={s.userNameTitle} variant={'subtitle2'}>
          {userName}
        </Typography>
        <Typography className={s.userEmailTitle} variant={'caption'}>
          {userEmail}
        </Typography>
      </div>
    </div>
  )
}

export default DropDownMenuProfileInfo
