import { useDispatch } from "react-redux"
import { increment, decrement, removeCart } from "../slices/cartSlice"

export const useCart = () => {
  const dispatch = useDispatch()

  const incrementAction = () => {
    dispatch(increment())
  }

  const decrementAction = () => {
    dispatch(decrement())
  }

  const removeCartAction = () => {
    dispatch(removeCart())
  }

  return { incrementAction, decrementAction, removeCartAction }
}