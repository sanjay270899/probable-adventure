import React from 'react'
import { style, tw } from 'twind/style'

export const buttonStyle = style({
  base: 'px-4 py-1.5 rounded text-content font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 font-ibm-sans disabled:text-content-dark disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-primary disabled:bg-primary-dark active:bg-primary-light focus:ring-primary',
      secondary:
        'bg-secondary disabled:bg-secondary-dark active:bg-secondary-light focus:ring-secondary',
      danger:
        'bg-danger disabled:bg-danger-dark active:bg-danger-light focus:ring-danger',
      warning:
        'bg-warning disabled:bg-warning-dark active:bg-warning-light focus:ring-warning',
      success:
        'bg-success disabled:bg-success-dark active:bg-success-light focus:ring-success'
    },
    size: {
      small: 'text-xs',
      regular: 'text-base',
      large: 'text-xl'
    }
  },
  defaults: {
    variant: 'primary',
    size: 'regular'
  }
})

export type ButtonStyleProps = Parameters<typeof buttonStyle>[0]

export type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonStyleProps

export interface ButtonProps extends HTMLButtonProps {
  /**
   * Custom class
   */
  className?: string
  /**
   * Text inside button
   */
  children?: React.ReactText
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      variant = 'primary',
      size = 'regular',
      type = 'button',
      children = '',
      className,
      ...rest
    } = props

    return (
      <button
        className={`${tw(buttonStyle({ size, variant }))} ${className}`}
        ref={ref}
        type={type}
        {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
