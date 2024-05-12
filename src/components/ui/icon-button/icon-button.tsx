import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react'

import { clsx } from 'clsx'

import s from './icon-button.module.scss'

type Props = {
  icon: ReactNode
  size?: number
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, Props>(
  ({ className, icon, size: sizeProp, ...restProps }, ref) => {
    const size = sizeProp ? `${sizeProp}rem` : '2.4rem'

    const IconButtonStyle: CSSProperties = {
      height: size,
      width: size,
    }

    const IconButtonClasses = clsx(s.root, className)

    return (
      <button className={IconButtonClasses} ref={ref} style={IconButtonStyle} {...restProps}>
        {isValidElement(icon) ? cloneElement(icon as ReactElement<any>, { size }) : null}
      </button>
    )
  }
)
