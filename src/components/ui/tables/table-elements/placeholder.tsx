import { ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
type PlaceholderProps = {
  children?: ReactNode
  className?: string
  text?: string
}
export const Placeholder = forwardRef<ElementRef<'div'>, PlaceholderProps>(
  (
    {
      children,
      className,
      text = 'This deck is empty. Click add new deck to fill this deck',
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      root: className,
    }

    return (
      <div className={classNames.root} ref={ref} {...restProps}>
        <Typography>{text}</Typography>
        {children}
      </div>
    )
  }
)
