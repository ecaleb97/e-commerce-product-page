import imageProduct1 from "../assets/images/image-product-1.jpg"
import imageProduct2 from "../assets/images/image-product-2.jpg"
import imageProduct3 from "../assets/images/image-product-3.jpg"
import imageProduct4 from "../assets/images/image-product-4.jpg"

export const links = [
  { id: 1, text: 'Collections', url: '#' },
  { id: 2, text: 'Men', url: '#' },
  { id: 3, text: 'Women', url: '#' },
  { id: 4, text: 'About', url: '#' },
  { id: 5, text: 'Contact', url: '#' },
] as const;

export const imgUrls = [
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
];