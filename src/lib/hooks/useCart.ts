import { useDispatch } from "react-redux"
import { increment, decrement } from "../slices/cartSlice"

export const useCart = () => {
  const dispatch = useDispatch()

  const incrementAction = () => {
    dispatch(increment())
  }

  const decrementAction = () => {
    dispatch(decrement())
  }

  return { incrementAction, decrementAction }
}