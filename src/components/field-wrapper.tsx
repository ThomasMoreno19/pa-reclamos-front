import React from 'react'
import { cn } from '@/utils/tailwind-class-merge'

type FieldWrapperProps = React.ComponentProps<'div'>

export const FieldSeparator: React.FC<FieldWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  )
}
