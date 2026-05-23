import type { MediaItem } from "@/components/ui/infinite-gallery"

import photo1 from "@/assets/photo1.jpeg"
import photo2 from "@/assets/photo2.jpeg"
import photo3 from "@/assets/photo3.jpeg"
import photo4 from "@/assets/photo4.jpeg"
import photo5 from "@/assets/photo5.jpeg"
import photo6 from "@/assets/photo6.jpeg"
import photo6b from "@/assets/photo6b.jpeg"
import photo7 from "@/assets/photo7.jpeg"
import photo8 from "@/assets/photo8.jpeg"
import photo9 from "@/assets/photo9.jpeg"
import photo10 from "@/assets/photo10.jpeg"


// Portrait photos (3:4 aspect ratio)
// Landscape photos (16:9 aspect ratio)
export const galleryImages: MediaItem[] = [
  { src: photo1, width: 3, height: 4, alt: "Фото 1", mobileFit: "contain" },
  { src: photo2, width: 3, height: 4, alt: "Фото 2", mobileFit: "contain" },
  { src: photo3, width: 3, height: 4, alt: "Фото 3", mobileFit: "contain" },
  { src: photo4, width: 16, height: 9, alt: "Фото 4", mobileFit: "contain" },
  { src: photo5, width: 16, height: 9, alt: "Фото 5", mobileFit: "contain" },
  { src: photo6, width: 3, height: 4, alt: "Фото 6", mobileFit: "contain" },
  { src: photo6b, width: 3, height: 4, alt: "Фото 6b", mobileFit: "contain" },
  { src: photo7, width: 3, height: 4, alt: "Фото 7", mobileFit: "contain" },
  { src: photo8, width: 16, height: 9, alt: "Фото 8", mobileFit: "contain" },
  { src: photo9, width: 16, height: 9, alt: "Фото 9", mobileFit: "contain" },
  { src: photo10, width: 16, height: 9, alt: "Фото 10", mobileFit: "contain" },
]

// Images used during the intro sequence (cycling animation)
export const introImages: string[] = [
  photo3,
  photo6,
  photo2,
  photo9,
  photo5,
  photo7,
  photo8,
  photo10,
  photo4,
  photo1,
]
