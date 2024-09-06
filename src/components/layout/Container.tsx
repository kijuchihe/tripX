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
      className={`${isFirst && 'h-[calc(100vh-70px)]'} ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  )
}

export default Container
