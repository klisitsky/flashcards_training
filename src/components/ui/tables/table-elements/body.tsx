import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    return <tbody className={className} ref={ref} {...restProps} />
  }
)
