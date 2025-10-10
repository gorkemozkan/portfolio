import { OptimizedImage } from './OptimizedImage'

export function HeroSection() {
  return (
    <>
      <div className="flex items-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <OptimizedImage
            src="https://media.licdn.com/dms/image/v2/D4D03AQGtAyc_Z-9XUg/profile-displayphoto-scale_400_400/B4DZlCQgnEGsAg-/0/1757753249059?e=1762992000&v=beta&t=_orskxS4mPut7YzBZCq98m7JCR653LamKeAqxAmUGYw"
            alt="Görkem Özkan"
            width={120}
            height={120}
            className="rounded-full"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            hideOnError
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-2 text-2xl lg:text-3xl font-bold">
            Görkem Özkan
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Software Developer focused on building web and mobile applications. 
            Experienced in creating component-driven interfaces with attention to performance, accessibility.
          </p>
        </div>
      </div>
    </>
  )
}
