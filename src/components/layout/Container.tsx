import React from 'react'

interface containerProps extends React.HTMLAttributes<HTMLDivElement> {
  isFirst?: boolean
}

const Container: React.FC<containerProps> = ({
  isFirst,
  className,
  children,
  ...props
}) => {
  return (
    <section
      {...props}
      className={`${isFirst && 'min-h-[calc(100vh-70px)] h-fit'} ${className}`}
    >
      <div className="container px-4 mx-auto lg:px-0">{children}</div>
    </section>
  )
}

export default Container
