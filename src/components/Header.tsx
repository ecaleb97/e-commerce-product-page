import { MenuIcon } from "./Icons/MenuIcon"
import { Logo } from "./Icons/Logo"
import { CartIcon } from "./Icons/CartIcon"
import { useState } from "react"
import { CloseIcon } from "./Icons/CloseIcon"
import { links } from "../lib/data"
import { useAppSelector } from "../lib/types"
import avatar from '../assets/images/image-avatar.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const value = useAppSelector(state => state.cart.value)

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <>
      <header className="bg-white w-full px-3 py-5">
        <nav className="flex justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleMenuClick}>
              <MenuIcon />
            </button>
            <a href="/" rel="noopener noreferer" className="-mt-[0.22rem]">
              <Logo />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="relative" 
              onClick={() => console.log('clicked')}
            >
              <CartIcon />
              {value === 0 ? '' : (
                <span className="absolute -top-[8px] -right-[8px] w-4 h-4 px-[10px]
                bg-[#ff7d1a] rounded-full text-white text-xs flex items-center justify-center">
                  {value}
                </span>
              )}
              
            </button>
            <div className="size-9"> 
              <img className="size-full" src={avatar} alt="User avatar" />
            </div>
          </div>
        </nav>
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