import { Header } from "./components/Header"
import { ImageSlider } from "./components/ImageSlider"
import { ProductInfo } from "./components/ProductInfo"
import avatar from "./assets/images/image-avatar.png"
import imageProduct1 from "./assets/images/image-product-1.jpg"
import imageProduct2 from "./assets/images/image-product-2.jpg"
import imageProduct3 from "./assets/images/image-product-3.jpg"
import imageProduct4 from "./assets/images/image-product-4.jpg"

function App() {
  const imgUrls = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
  ]

  return (
    <>
      <Header />
      <main>
        <ImageSlider imageUrls={imgUrls} />
        <ProductInfo />
      </main>
    </>
  )
}

export default App
