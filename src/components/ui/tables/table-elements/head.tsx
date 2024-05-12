import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    return <thead className={className} ref={ref} {...restProps} />
  }
)
