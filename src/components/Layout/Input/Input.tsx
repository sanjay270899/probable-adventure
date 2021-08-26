import React from 'react'
import { style, tw } from 'twind/style'

import { HTMLInputProps } from '@interfaces/html'

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
    size: {
      small: 'text-xs',
      regular: 'text-lg',
      large: 'text-xl'
    }
  },
  defaults: {
    size: 'regular'
  }
})

export type InputStyleProps = Parameters<typeof inputStyle>[0]

export type InputProps = HTMLInputProps & InputStyleProps

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { type = 'text', size = 'regular', error, className, ...rest } = props

    return (
      <input
        ref={ref}
        type={type}
        {...rest}
        style={{ boxShadow: 'none' }}
        className={`${tw(inputStyle({ size, error }))} ${className}`}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
