import * as React from "react"
import { cn } from "@/lib/utils"

export interface MediaItem {
  src: string
  width: number
  height: number
  alt?: string
  mobileFit?: "cover" | "contain"
}

interface InfiniteGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MediaItem[]
  enabled?: boolean
}

function calculateWidth(item: MediaItem, viewportHeight: number): number {
  return (viewportHeight * item.width) / item.height
}

const InfiniteGallery = React.forwardRef<HTMLDivElement, InfiniteGalleryProps>(
  ({ className, items, enabled = true, ...props }, ref) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const tileRefs = React.useRef<Array<HTMLDivElement | null>>([])
    const [viewportHeight, setViewportHeight] = React.useState(
      typeof window !== "undefined" ? window.innerHeight : 800
    )
    const [viewportWidth, setViewportWidth] = React.useState(
      typeof window !== "undefined" ? window.innerWidth : 1200
    )
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const itemWidths = React.useMemo(
      () => items.map((item) => calculateWidth(item, viewportHeight)),
      [items, viewportHeight]
    )

    const itemPositions = React.useMemo(() => {
      const positions: number[] = [0]
      itemWidths.forEach((width, i) => {
        positions.push(positions[i] + width)
      })
      return positions
    }, [itemWidths])

    const setWidth = React.useMemo(
      () => itemWidths.reduce((sum, w) => sum + w, 0),
      [itemWidths]
    )

    const repeatCount = 50

    React.useEffect(() => {
      const onResize = () => {
        setViewportHeight(window.innerHeight)
        setViewportWidth(window.innerWidth)
      }
      window.addEventListener("resize", onResize)
      return () => window.removeEventListener("resize", onResize)
    }, [])

    // Scroll-driven creative transitions via rAF
    React.useEffect(() => {
      const container = scrollRef.current
      if (!container || !enabled) return

      let rafId = 0
      let ticking = false

      const applyTransforms = () => {
        const scrollLeft = container.scrollLeft
        const vw = window.innerWidth
        const vh = window.innerHeight
        const centerX = scrollLeft + vw / 2

        for (const tile of tileRefs.current) {
          if (!tile) continue
          const tileLeft = tile.offsetLeft
          const tileWidth = tile.offsetWidth
          const tileCenter = tileLeft + tileWidth / 2
          const distance = tileCenter - centerX
          // Normalized -1 .. 1 across roughly one viewport width
          const t = Math.max(-1.4, Math.min(1.4, distance / vw))
          const abs = Math.abs(t)

          // Creative composite transform:
          //  - subtle 3D rotation as the tile passes the center
          //  - depth scale (center pops forward)
          //  - parallax image shift inside the tile (opposite direction)
          const rotateY = t * -18 // deg
          const scale = 1 - abs * 0.12
          const translateZ = (1 - abs) * 40
          const opacity = 1 - abs * 0.35

          tile.style.transform = `perspective(1400px) translate3d(0,0,0) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`
          tile.style.opacity = String(opacity)
          tile.style.zIndex = String(Math.round((1 - abs) * 100))

          const img = tile.querySelector<HTMLImageElement>("[data-main-img]")
          if (img) {
            const parallax = t * 40 // px, image moves opposite of motion
            const imgScale = 1.05 + (1 - abs) * 0.08
            img.style.transform = `translate3d(${-parallax}px, 0, 0) scale(${imgScale})`
          }

          const blur = tile.querySelector<HTMLImageElement>("[data-blur-bg]")
          if (blur) {
            blur.style.transform = `scale(1.2) translate3d(${t * 20}px, 0, 0)`
            blur.style.opacity = String(0.45 + (1 - abs) * 0.35)
          }
        }

        ticking = false
      }

      const onScroll = () => {
        if (!ticking) {
          rafId = requestAnimationFrame(applyTransforms)
          ticking = true
        }

        const scrollLeft = container.scrollLeft
        const maxScroll = setWidth * (repeatCount - 5)
        const minScroll = setWidth * 5
        if (scrollLeft > maxScroll) container.scrollLeft = scrollLeft - setWidth * 20
        if (scrollLeft < minScroll) container.scrollLeft = scrollLeft + setWidth * 20

        const viewportCenter = scrollLeft + window.innerWidth / 2
        const positionInSet = viewportCenter % setWidth
        let index = 0
        for (let i = 0; i < itemPositions.length - 1; i++) {
          if (positionInSet >= itemPositions[i] && positionInSet < itemPositions[i + 1]) {
            index = i
            break
          }
        }
        setCurrentIndex(index)
      }

      // Init position
      const middlePosition = setWidth * Math.floor(repeatCount / 2)
      container.scrollLeft = middlePosition

      container.addEventListener("scroll", onScroll, { passive: true })
      applyTransforms()
      return () => {
        container.removeEventListener("scroll", onScroll)
        cancelAnimationFrame(rafId)
      }
    }, [setWidth, enabled, repeatCount, itemPositions, itemWidths])

    const repeatedItems = React.useMemo(() => {
      const result: Array<{ item: MediaItem; width: number; key: string }> = []
      for (let i = 0; i < repeatCount; i++) {
        items.forEach((item, idx) => {
          result.push({
            item,
            width: itemWidths[idx],
            key: `${i}-${idx}`,
          })
        })
      }
      return result
    }, [items, itemWidths, repeatCount])

    const totalWidth = setWidth * repeatCount

    return (
      <div
        ref={ref}
        className={cn("h-dvh overflow-hidden relative", className)}
        {...props}
      >
        <div
          ref={scrollRef}
          className={cn(
            "h-full overflow-x-auto overflow-y-hidden",
            "scrollbar-none [&::-webkit-scrollbar]:hidden",
            "[-ms-overflow-style:none] [scrollbar-width:none]"
          )}
          style={{ contain: "strict", perspective: "1400px" }}
        >
          <div
            className="flex h-full"
            style={{ width: totalWidth, transformStyle: "preserve-3d" }}
          >
            {repeatedItems.map(({ item, width, key }, i) => (
              <div
                key={key}
                ref={(el) => (tileRefs.current[i] = el)}
                className="relative h-full flex-shrink-0 overflow-hidden bg-black will-change-transform"
                style={{
                  width,
                  transformStyle: "preserve-3d",
                  transition: "opacity 200ms ease-out",
                }}
              >
                {item.mobileFit === "contain" && (
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden
                    data-blur-bg
                    className="absolute inset-0 h-full w-full object-cover blur-2xl will-change-transform"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                )}
                <img
                  src={item.src}
                  alt={item.alt ?? ""}
                  data-main-img
                  className={cn(
                    "relative h-full w-full will-change-transform",
                    item.mobileFit === "contain" ? "object-contain" : "object-cover"
                  )}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                {/* Soft edge vignette to blend tiles into each other */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Page indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          {items.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-300"
              style={{ opacity: index === currentIndex ? 1 : 0.3 }}
            />
          ))}
        </div>
      </div>
    )
  }
)
InfiniteGallery.displayName = "InfiniteGallery"

export { InfiniteGallery }
