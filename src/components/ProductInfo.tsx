import { CartIcon } from "./Icons/CartIcon"
import { MinusIcon } from "./Icons/MinusIcon"
import { PlusIcon } from "./Icons/PlusIcon"
import { useCart } from '../lib/hooks/useCart'
import { useAppSelector } from "../lib/types"

export function ProductInfo() {
  const value = useAppSelector(state => state.cart.value)
  const { incrementAction, decrementAction } = useCart()

  const handleDecrement = () => {
    if (value === 0) return
    decrementAction()
  }

  return (
    <section className="z-10 p-5 flex flex-col gap-5 md:gap-10">
      <small className="font-semibold tracking-widest text-[#ff7d1a]">SNEAKER COMPANY</small>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Fall Limited Edition Sneakers</h1>
      <p className="text-[#68707d] font-normal">These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.
      </p>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">$125.00</span>
          <span className="bg-[#ffede0] 
          text-sm text-[#ff7d1a] font-bold
          px-2 py-1 rounded-lg"
          >
            50%
          </span>
        </div>
        <span className="md:bg-none text-[#b6bcc8] font-semibold line-through">
          $250.00
        </span>
      </div>
      <div className="flex justify-between items-center
      rounded-lg font-bold md:gap-4">
        <div className="bg-[#f7f8fd] w-full md:w-[40%] flex justify-between items-center
        py-3 px-3 rounded-lg">
          <button 
            onClick={handleDecrement}
            className="text-[#ff7d1a] bg-[#f7f8fd]">
            <MinusIcon />
          </button>
          <span className="bg-[#f7f8fd]">{value}</span>
          <button 
            onClick={incrementAction}
            className="text-[#ff7d1a] bg-[#f7f8fd]"
          >
            <PlusIcon />
          </button>
        </div>
        <button 
          onClick={incrementAction}
          className="hidden bg-[#ff7d1a] text-white font-semibold text-lg
          md:flex justify-center items-center gap-2 py-[10px] rounded-lg px-8
          w-[60%] md:text-sm lg:text-lg"
        >
          <CartIcon />
          Add to Cart
        </button>
      </div>
      <button 
        onClick={incrementAction}
        className="bg-[#ff7d1a] text-white font-semibold text-lg
        flex justify-center items-center gap-4 py-3 rounded-lg md:hidden">
        <CartIcon />
        Add to Cart
      </button>
    </section>
  )
}