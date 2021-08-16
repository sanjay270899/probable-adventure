import React from 'react'

export const ComponentSeparator = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-wrap">
      {React.Children.map(children, (child) => {
        return <span className="mx-3 my-1">{child}</span>
      })}
    </div>
  )
}
