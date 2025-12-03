import React from 'react'
import { cn } from '@/utils/tailwind-class-merge'

type TitleProps = React.ComponentProps<'h1'>

export const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-3xl font-bold mb-2 text-center text-white tracking-tight', className)} {...props}>
      {children}
    </h1>
  )
}
