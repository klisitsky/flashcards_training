import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '../table.module.scss'
export const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    const rootClasses = clsx(s.root, className)

    return <table className={rootClasses} ref={ref} {...restProps} />
  }
)
