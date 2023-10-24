import { RootState } from 'apps/design2/src/store';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import { Text } from '@nx-sample/components';
import { decrement, increment } from '@nx-sample/redux';

export function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Text text="Design 2" />
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
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        }
      />
      <Route
        path="/page-2"
        element={
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
