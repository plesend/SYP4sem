import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { increment, decrement, reset } from '../redux/actions'
import Button from './Button'

const Counter = () => {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="counter-box">
      <h2 className="counter-title">Счётчик: {count}</h2>
      <div className="button-group">
        <Button onClick={() => dispatch(increment())}>✨ Увеличить</Button>
        <Button onClick={() => dispatch(decrement())}>💫 Уменьшить</Button>
        <Button onClick={() => dispatch(reset())}>🔄 Сбросить</Button>
      </div>
    </div>
  )
}

export default Counter
