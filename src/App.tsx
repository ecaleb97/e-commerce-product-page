import { Header } from "./components/Header"
import { ImageSlider } from "./components/ImageSlider"
import { ProductInfo } from "./components/ProductInfo"
import { imgUrls } from "./lib/data"

function App() {
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
