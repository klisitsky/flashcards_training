import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '../table.module.scss'
export const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    const headCellClasses = clsx(s.headCell, className)

    return <th className={headCellClasses} ref={ref} {...restProps} />
  }
)
