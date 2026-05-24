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
export const galleryImages: MediaItem[] = []

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
