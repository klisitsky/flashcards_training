import { ComponentProps } from 'react'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'>

export const Header = ({ children, className }: HeaderProps) => {
  return <header className={`${s.headerBody} ${className}`}>{children}</header>
}
