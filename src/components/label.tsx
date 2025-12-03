import { cn } from '@/utils/tailwind-class-merge'
import React from 'react'

type LabelProps = React.ComponentProps<'label'>

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={cn('flex gap-2 items-center font-medium cursor-pointer w-fit', className)} {...props}>
      {children}
    </label>
  )
}
