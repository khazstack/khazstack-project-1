import type { MediaItem } from "@/components/ui/infinite-gallery"

import photo1 from "@/assets/photo1.jpeg"
import photo2 from "@/assets/photo2.jpeg"
import photo3 from "@/assets/photo3.jpeg"
import photo4 from "@/assets/photo4.jpeg"
import photo5 from "@/assets/photo5.jpeg"
import photo6 from "@/assets/photo6.jpeg"
import photo7 from "@/assets/photo7.jpeg"
import photo8 from "@/assets/photo8.jpeg"
import photo9 from "@/assets/photo9.jpeg"
import photo10 from "@/assets/photo10.jpeg"
import photo11 from "@/assets/photo11.jpeg"

// Portrait photos (3:4 aspect ratio)
// Landscape photos (16:9 aspect ratio)
export const galleryImages: MediaItem[] = [
  { src: photo1, width: 3, height: 4, alt: "Фото 1" },
  { src: photo2, width: 3, height: 4, alt: "Фото 2" },
  { src: photo3, width: 3, height: 4, alt: "Фото 3" },
  { src: photo4, width: 3, height: 4, alt: "Фото 4" },
  { src: photo5, width: 3, height: 4, alt: "Фото 5" },
  { src: photo6, width: 16, height: 9, alt: "Фото 6" },
  { src: photo7, width: 3, height: 4, alt: "Фото 7" },
  { src: photo8, width: 3, height: 4, alt: "Фото 8" },
  { src: photo9, width: 3, height: 4, alt: "Фото 9" },
  { src: photo10, width: 16, height: 9, alt: "Фото 10" },
  { src: photo11, width: 16, height: 9, alt: "Фото 11" },
]

// Images used during the intro sequence (cycling animation)
// Final image matches first gallery image for seamless transition
export const introImages: string[] = [
  photo3,
  photo6,
  photo2,
  photo9,
  photo5,
  photo7,
  photo8,
  photo10,
  photo11,
  photo4,
  photo1,
]
