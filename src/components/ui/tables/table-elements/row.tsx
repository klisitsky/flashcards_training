import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '../table.module.scss'
export const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const rowClasses = clsx(s.row, className)

    return <tr className={rowClasses} ref={ref} {...restProps} />
  }
)
