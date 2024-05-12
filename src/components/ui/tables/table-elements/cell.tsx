import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '../table.module.scss'
export const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    const cellClasses = clsx(s.cell, className)

    return <td className={cellClasses} ref={ref} {...restProps} />
  }
)
