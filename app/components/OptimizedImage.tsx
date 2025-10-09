'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallback?: React.ReactNode
  hideOnError?: boolean
}

export function OptimizedImage({ 
  fallback, 
  hideOnError = false,
  quality = 95,
  ...props 
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError && hideOnError) {
    return null
  }

  if (imageError && fallback) {
    return <>{fallback}</>
  }

  return (
    <Image
      {...props}
      quality={quality}
      onError={() => setImageError(true)}
    />
  )
}

