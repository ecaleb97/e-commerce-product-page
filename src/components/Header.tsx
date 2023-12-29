import { MenuIcon } from "./Icons/MenuIcon"
import { Logo } from "./Icons/Logo"
import { CartIcon } from "./Icons/CartIcon"
import { useState } from "react"
import { CloseIcon } from "./Icons/CloseIcon"
import { links } from "../lib/data"
import { useAppSelector } from "../lib/types"
import avatar from '../assets/images/image-avatar.png'
import { imgUrls } from "../lib/data"
import { DeleteIcon } from "./Icons/DeleteIcon"
import { useCart } from "../lib/hooks/useCart"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const value = useAppSelector(state => state.cart.value)
  const { removeCartAction } = useCart()

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <>
      <header className="bg-white w-full px-3 py-5 max-w-[1200px] mx-auto md:px-6
      lg:border-b-[2px] lg:border-[#f7f8fd] lg:pb-7 relative">
        <nav className="flex justify-between">
          <div className="flex items-center gap-4 md:gap-7 lg:gap-14">
            <button 
              className="md:hidden"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </button>
            <a href="/" rel="noopener noreferer" className="-mt-[0.22rem]">
              <Logo />
            </a>
            <nav>
              <ul className="hidden md:flex gap-4 lg:gap-8">
                {links.map(link => {
                  const { id, text, url } = link
                  return (
                    <li key={id}>
                      <a 
                        className="text-md text-[#68707d] hover:text-[#1d2025]
                        hover:border-b-[4px] hover:border-[#ff7d1a] hover:pb-8" 
                        href={url}
                      >
                        {text}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="relative" 
              onClick={() => setIsCartOpen(prevState => !prevState)}
            >
              <CartIcon />
              {value === 0 ? '' : (
                <span className="absolute -top-[8px] -right-[8px] w-4 h-4 px-[10px]
                bg-[#ff7d1a] rounded-full text-white text-xs flex items-center justify-center">
                  {value}
                </span>
              )}
            </button>
            <div className="size-9 hover:border-[2px] hover:border-[#ff7d1a] 
            rounded-full hover:scale-125 cursor-pointer"> 
              <img className="size-full" src={avatar} alt="User avatar" />
            </div>
          </div>
        </nav>
        {isCartOpen && (
          <div className="bg-white shadow-2xl z-[999] absolute top-[90px] 
          max-w-[400px] sm:w-[375px] left-3 mx-auto
          right-3 rounded-xl h-[300px] sm:h-[18rem] sm:mx-0 sm:left-[40%]
          md:left-[50%] lg:left-[60%] xl:left-[70%]"
          >
            <h1 
              className="text-xl p-5 font-semibold border-b-[2px] border-[#f7f8fd]"
            >
              Cart
            </h1>
            <div className="px-8 my-2">
              {value === 0 
                ? <p className="text-[#68707d] text-center mt-8 font-semibold">
                    You have no items in your cart.
                </p> 
                : (
                  <div className="flex flex-col gap-12 sm:gap-12 sm:mt-6">
                    <div className="flex justify-evenly gap-3 items-center">
                      <img src={imgUrls[0]} className="size-12 rounded-lg" alt="" />
                      <div className="flex flex-col items-start">
                        <small className="text-[15px] text-[#68707d] text-left">
                        Fall Limited Edition Sneakers
                        </small>
                        <p className="text-[#68707d]">
                          $125.00 x {value} 
                          <span className="text-black ml-4 font-bold">
                            {`$${125 * value}.00`}
                          </span>
                        </p>
                      </div>
                      <button 
                        className="text-[#68707d] hover:text-red-500"
                        onClick={removeCartAction}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                    <button className="bg-[#ff7d1a] rounded-lg
                    py-3 text-white font-semibold text-lg">
                      Checkout
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        )}
      </header>
      {isMenuOpen && (
        <nav className="bg-white z-[999] 
        fixed top-0 left-0 right-0 bottom-0
        p-5 overflow-y-scroll">
          <button className="size-9" onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </button>
          <ul className="my-14 flex flex-col gap-7">
            {links.map(link => {
              const { id, text, url } = link
              return (
                <li key={id} onClick={() => setIsMenuOpen(false)}>
                  <a
                    className="text-2xl font-bold text-gray-800" 
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </>
    
  )
}