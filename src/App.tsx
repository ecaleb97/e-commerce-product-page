import { Header } from "./components/Header"
import { ImageSlider } from "./components/ImageSlider"
import { ProductInfo } from "./components/ProductInfo"

function App() {
  const imgUrls = [
    './assets/images/image-product-1.jpg',
    './assets/images/image-product-2.jpg',
    './assets/images/image-product-3.jpg',
    './assets/images/image-product-4.jpg',
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
