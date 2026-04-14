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

// Portrait photos (3:4 aspect ratio)
// Landscape photos (16:9 aspect ratio)
export const galleryImages: MediaItem[] = [
  {
    src: photo1,
    width: 3,
    height: 4,
    alt: "Портретное фото в белой блузке с чёрным цветком",
    mobileObjectFit: "contain",
    mobileObjectPosition: "center center",
  },
  {
    src: photo2,
    width: 3,
    height: 4,
    alt: "Портретное фото в ярком кимоно",
    mobileObjectPosition: "center center",
  },
  {
    src: photo3,
    width: 16,
    height: 9,
    alt: "Фото сверху в кожаной куртке",
  },
  {
    src: photo4,
    width: 3,
    height: 4,
    alt: "Портретное фото за стулом в белом платье",
  },
  {
    src: photo5,
    width: 3,
    height: 4,
    alt: "Портретное фото в жёлтом платье",
  },
  {
    src: photo6,
    width: 16,
    height: 9,
    alt: "Портретное фото в ярком кимоно с поднятыми руками",
  },
  {
    src: photo7,
    width: 16,
    height: 9,
    alt: "Фото сверху в белой рубашке",
  },
  {
    src: photo8,
    width: 16,
    height: 9,
    alt: "Портретное фото за стулом крупный план",
  },
  {
    src: photo9,
    width: 3,
    height: 4,
    alt: "Портретное фото в синем пальто с узором",
    mobileObjectPosition: "center center",
  },
  {
    src: photo10,
    width: 3,
    height: 4,
    alt: "Портретное фото в жёлтом платье крупный план",
  },
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
  photo4,
  photo1,
]
