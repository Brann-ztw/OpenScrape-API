interface ImageSize {
  width: number;
  height: number;
  url: string;
}

interface Images {
  [key: string]: ImageSize;
}

export interface Pin {
  images: Images;
}