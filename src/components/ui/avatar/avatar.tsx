import s from './avatar.module.scss'

type AvatarProps = {
  avatar: string
  className?: string
}
export const Avatar = ({ avatar, className }: AvatarProps) => {
  return (
    <>
      <img alt={'avatar'} className={`${s.avatar} ${className}`} src={avatar} />
    </>
  )
}
