import { decrementLocal, incrementLocal } from '@design1/redux/test/slice';
import { RootState } from '@design1/store';
import { Text } from '@nx-sample/components';
import { decrement, increment } from '@nx-sample/redux';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const countLocal = useSelector(
    (state: RootState) => state.localCounter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Text text="Design 1" />
      <div>
        <p>Share logic Counter</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
        <p>Local counter</p>
        <button
          aria-label="Increment local value"
          onClick={() => dispatch(incrementLocal())}
        >
          Increment Local
        </button>
        <span>{countLocal}</span>
        <button
          aria-label="Decrement local value"
          onClick={() => dispatch(decrementLocal())}
        >
          Decrement Local
        </button>
      </div>
    </div>
  );
}

export default App;
