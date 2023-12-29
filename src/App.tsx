import { Header } from "./components/Header"
import { ImageSlider } from "./components/ImageSlider"
import { ProductInfo } from "./components/ProductInfo"
import { imgUrls } from "./lib/data"

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="md:flex md:gap-10 md:items-center md:px-6 md:pt-12 max-w-[1100px] lg:mx-auto">
          <ImageSlider imageUrls={imgUrls} />
          <ProductInfo />
        </div>
      </main>
    </>
  )
}

export default App
