import { cn } from '@/utils/tailwind-class-merge'
import React from 'react'

type SubtitleProps = React.ComponentProps<'p'>

export const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn('text-sm text-center text-white/70 mb-4 ', className)} {...props}>
      {children}
    </p>
  )
}
