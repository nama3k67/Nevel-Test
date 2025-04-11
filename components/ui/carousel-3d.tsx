"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type Carousel3DProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}

type Carousel3DContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & Carousel3DProps

const Carousel3DContext = React.createContext<Carousel3DContextProps | null>(null)

function useCarousel3D() {
  const context = React.useContext(Carousel3DContext)

  if (!context) {
    throw new Error("useCarousel3D must be used within a <Carousel3D />")
  }

  return context
}

function Carousel3D({
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & Carousel3DProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      align: "center",
      containScroll: "trimSnaps",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <Carousel3DContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </Carousel3DContext.Provider>
  )
}

function Carousel3DContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef } = useCarousel3D()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          className
        )}
        {...props}
      />
    </div>
  )
}

function Carousel3DItem({ className, ...props }: React.ComponentProps<"div">) {
  const itemRef = React.useRef<HTMLDivElement>(null)
  const [isSelected, setIsSelected] = React.useState(false)
  const [isLeft, setIsLeft] = React.useState(false)
  const [isRight, setIsRight] = React.useState(false)
  
  React.useEffect(() => {
    if (!itemRef.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSelected(entry.isIntersecting)
        
        // Check if this is the left or right item
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect
          const parentRect = itemRef.current?.parentElement?.getBoundingClientRect()
          
          if (parentRect) {
            const isLeftItem = rect.left < parentRect.left + parentRect.width / 3
            const isRightItem = rect.right > parentRect.left + (parentRect.width * 2) / 3
            
            setIsLeft(isLeftItem)
            setIsRight(isRightItem)
          }
        }
      },
      { threshold: 0.5 }
    )
    
    observer.observe(itemRef.current)
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 transition-all duration-300",
        isSelected 
          ? "basis-full scale-100 opacity-100 z-10" 
          : isLeft || isRight
            ? "basis-full scale-90 opacity-50 z-0"
            : "basis-full scale-90 opacity-50 z-0",
        className
      )}
      style={{
        transform: isSelected 
          ? "perspective(1000px) rotateY(0deg) translateZ(0)" 
          : isLeft
            ? "perspective(1000px) rotateY(20deg) translateZ(-100px)"
            : isRight
              ? "perspective(1000px) rotateY(-20deg) translateZ(-100px)"
              : "perspective(1000px) rotateY(0deg) translateZ(-100px)",
        width: isLeft || isRight ? "50%" : "100%",
        marginLeft: isLeft ? "auto" : "0",
        marginRight: isRight ? "auto" : "0",
      }}
      {...props}
    />
  )
}

function Carousel3DPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel3D()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function Carousel3DNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel3D()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel3D,
  Carousel3DContent,
  Carousel3DItem,
  Carousel3DPrevious,
  Carousel3DNext,
} 