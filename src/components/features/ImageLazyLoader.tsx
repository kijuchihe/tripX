import React, { useState } from 'react'
import { decode } from 'blurhash'

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageUrl: string
  blurUrl: string | null
}

const ImageLazyLoader: React.FC<ImageLoaderProps> = ({
  imageUrl,
  blurUrl,
  className,
  alt,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(true)

  const getBlurredImage = (blurUrl: string) => {
    const width = 32
    const height = 32
    const pixels = decode(blurUrl, width, height)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const imageData = ctx.createImageData(width, height)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
      return canvas.toDataURL()
    }
    return ''
  }

  return (
    <div className="relative">
      {/* Blurred image */}
      {blurUrl && (
        <img
          src={getBlurredImage(blurUrl)}
          alt={alt}
          className={` inset-0 object-cover transition-opacity duration-300 ${
            isLoaded ? 'hidden opacity-0' : 'opacity-100'
          } ${className}`}
          loading="lazy"
          {...props}
        />
      )}

      {/* Full image */}
      <img
        src={imageUrl}
        alt={alt}
        className={`object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'hidden'
        } ${className}`}
        onLoad={() => setIsLoaded(() => true)}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

export default ImageLazyLoader
