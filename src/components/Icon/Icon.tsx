import React from 'react'

import * as HeroiconsOutline from '@heroicons/react/outline'
import * as HeroiconsSolid from '@heroicons/react/solid'

export type heroiconsComponentType = (
  _props: React.ComponentProps<'svg'>
) => React.ReactElement

interface IconsNameType {
  [name: string]: heroiconsComponentType
}

const ICONS_SOLID: IconsNameType = HeroiconsSolid
const ICONS_OUTLINE: IconsNameType = HeroiconsOutline

export interface CustomIconProps {
  name: string
  isSolid?: boolean
}

export type SVGProps = React.ComponentProps<'svg'>

export type IconProps = CustomIconProps & SVGProps

const getIcon = (props: IconProps): React.ReactElement => {
  const { name, isSolid, className, ...rest } = props

  const convertedName: string = convertName(name)

  let Component: heroiconsComponentType = ICONS_OUTLINE[convertedName]

  if (isSolid) {
    Component = ICONS_SOLID[convertedName]
  }

  if (!Component) {
    return <></>
  }

  return <Component className={`h-6 ${className}`} {...rest} />
}

const convertName = (name: string): string => {
  const words: string[] = name.split('-')

  const updatedWords: string[] = words.map((word) =>
    word.length > 0 ? word[0].toUpperCase() + word.substring(1) : word
  )

  return `${updatedWords.join('')}Icon`
}

export const Icon = (props: IconProps) => {
  return <>{getIcon(props)}</>
}

export default Icon
