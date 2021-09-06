import { HTMLInputProps } from 'interfaces/html'
import React from 'react'
import { style, tw } from 'twind/style'

export const inputStyle = style({
  base: `
    bg-elevation-5
    rounded
    border-transparent
    border-2
    hover:border-content-muted
    placeholder-content-muted
    text-content
    disabled:bg-elevation-3
    disabled:placeholder-elevation-5
    disabled:text-elevation-5
    font-ibm-sans
    focus:border-content-medium
    `,
  variants: {
    error: {
      true: 'border-danger hover:border-danger focus:border-danger'
    },
    textSize: {
      small: 'text-xs',
      regular: 'text-lg',
      large: 'text-xl'
    }
  },
  defaults: {
    textSize: 'regular'
  }
})

export type InputStyleProps = Parameters<typeof inputStyle>[0]

export type InputProps = HTMLInputProps & InputStyleProps

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      type = 'text',
      textSize = 'regular',
      error,
      className,
      ...rest
    } = props

    return (
      <input
        ref={ref}
        type={type}
        {...rest}
        style={{ boxShadow: 'none' }}
        className={`${tw(inputStyle({ textSize, error }))} ${className}`}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
