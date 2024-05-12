import { forwardRef } from 'react'

import s from './profileIcon.module.scss'

export type ProfileIconProps = {
  className?: string
  userPhotoUrl?: string
}

export const ProfileIcon = forwardRef<HTMLImageElement, ProfileIconProps>(
  (props: ProfileIconProps, ref) => {
    const { className, userPhotoUrl } = props

    return (
      <img
        alt={'userPhoto'}
        className={`${s.userPhoto} ${className}`}
        ref={ref}
        src={userPhotoUrl}
      />
    )
  }
)
