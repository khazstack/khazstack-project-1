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

export const galleryImages: MediaItem[] = [
  { src: photo1, width: 9, height: 16, alt: "Фото в жёлтом платье" },
  { src: photo2, width: 9, height: 16, alt: "Фото в ярком кимоно" },
  { src: photo3, width: 9, height: 16, alt: "Портрет с чёрным цветком" },
  { src: photo4, width: 16, height: 9, alt: "Фото сверху в кожаной куртке" },
  { src: photo5, width: 16, height: 9, alt: "Фото в кимоно с поднятыми руками" },
  { src: photo6, width: 9, height: 16, alt: "Портрет в жёлтом платье" },
  { src: photo7, width: 9, height: 16, alt: "Портрет за стулом" },
  { src: photo8, width: 9, height: 16, alt: "Фото в национальном чапане" },
  { src: photo9, width: 16, height: 9, alt: "Фото сверху в белой рубашке" },
  { src: photo10, width: 16, height: 9, alt: "Портрет в национальном чапане" },
]

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
