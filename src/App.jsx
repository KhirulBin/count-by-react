import { useState } from "react";

function App() {
  let [count, setCount] = useState(0)
    function increment (){
    setCount(count += 1)
  }

  function decrement (){
    setCount(count -=1)
  }

  function incrementByValue() {
    setCount (count += 10)
  }

  function decrementByValue() {
    setCount (count -= 10)
  }

  return (
    <div className="m-30 flex gap-3 items-center">
      <button className="text-6xl bg-green-600 inline-block px-3 py-3 rounded-xl" onClick={incrementByValue}>+10</button>
      <button className="text-6xl bg-green-400 inline-block px-2 py-2 rounded-xl" onClick={increment}>+</button>
      <h1 className="text-6xl bg-gray-600 inline-block px-10 py-10 rounded-xl">{count}</h1>
      <button className="text-6xl bg-rose-400 inline-block px-2 py-2 rounded-xl" onClick={decrement}>-</button>
      <button className="text-6xl bg-rose-600 inline-block px-3 py-3 rounded-xl" onClick={decrementByValue}>-10</button>
    </div>
  );
}

export default App;
