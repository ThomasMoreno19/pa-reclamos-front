import { Slot } from '@radix-ui/react-slot'
import { Ring } from '@uiball/loaders'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind-class-merge'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
	{
		variants: {
			variant: {
				default: 'bg-blue-600 text-white hover:bg-blue-600/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-xl px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			loading,
			children,
			onClick,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		const child = loading ? <Ring size={24} color="white" /> : children
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				onClick={onClick}
				disabled={loading}
				{...props}
			>
				{child}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean
	asChild?: boolean
	full?: boolean
	link?: string
	href: string
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
	(
		{ className, variant, size, children, loading, full, href, ...props },
		ref
	) => {
		const child = loading ? <Ring size={24} color="white" /> : children

		return (
			<a
				className={cn(buttonVariants({ variant, size, className }), {
					'w-full': full
				})}
				ref={ref}
				href={href}
				{...props}
			>
				{child}
			</a>
		)
	}
)
LinkButton.displayName = 'Button'
