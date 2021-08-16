import React from 'react'

export type variantType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'

export type buttonType = 'button' | 'reset' | 'submit'

export type sizeType = 'small' | 'regular' | 'large'

export interface ButtonProps {
  /**
   * Backgorund Color for Button
   * @default primary
   */
  variant?: variantType
  /**
   * Type of Button
   * @default button
   */
  type?: buttonType
  /**
   * Size of Button
   * @default regular
   */
  size?: sizeType
  /**
   * Clickable or not
   * @default false
   */
  disabled?: boolean
  /**
   * Text inside button
   * @default ''
   */
  children?: React.ReactText
  /**
   * onClick event handler when Button is clicked
   */
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /**
   * onMouseEnter event handler when Button is clicked
   */
  onMouseEnter?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  /**
   * onMouseLeave event handler when Button is clicked
   */
  onMouseLeave?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

const sizeMapping = {
  small: 'sm',
  regular: 'base',
  large: 'lg'
}

const paddingXMapping = {
  small: 2.5,
  regular: 3,
  large: 3.5
}

const paddingYMapping = {
  small: 1.5,
  regular: 2,
  large: 2.5
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      variant = 'primary',
      type = 'button',
      size = 'regular',
      disabled = false,
      children = '',
      ...rest
    } = props

    return (
      <button
        ref={ref}
        className={`
          text-${sizeMapping[size]}
          bg-${variant}
          rounded
          text-content
          px-${paddingXMapping[size]}
          py-${paddingYMapping[size]}
          active:bg-${variant}-light
          active:outline-none
          disabled:bg-${variant}-dark
          disabled:text-content-dark
          disabled:cursor-not-allowed
          focus:outline-${variant}
          font-semibold
          font-ibm-sans
          text-uppercase
          flex
        `}
        type={type}
        disabled={disabled}
        {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
