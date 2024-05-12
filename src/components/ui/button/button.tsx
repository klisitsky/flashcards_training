import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { IconType } from 'react-icons'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  colorIcon?: string
  fullWidth?: boolean
  icon?: IconType
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    colorIcon,
    fullWidth,
    icon: Icon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      <div className={s.buttonBody}>
        {Icon && <Icon color={colorIcon} />}
        {children}
      </div>
    </Component>
  )
}
