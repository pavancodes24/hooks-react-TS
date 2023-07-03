import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from "react";
import "./App.css";

//Ts interfaces

type User = {
  id: number;
  username: string;
};

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null!)


  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  //typeguard or optional chaining  / nonnull assertion (null!)

  // usememo is used for expensive calculation

  const result = useMemo<number>(() => fib(myNum), [myNum]);
  console.log(result);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  useEffect(() => {
    console.log("mounting");

    return () => console.log("unmounting");
  }, [user]);
  return (
    <>
      <h1>React TS</h1>
      <h3>Count is {count}</h3>
      <h2>{result}</h2>
      <input ref={inputRef} type='text'/>
      <button onClick={addTwo}>Add</button>
    </>
  );
}

export default App;
