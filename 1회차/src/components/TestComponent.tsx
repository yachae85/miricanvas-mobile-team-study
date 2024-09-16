import { useState } from '../custom_hooks/useState';

export const TestComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  const [anotherCounter, setAnotherCounter] = useState<number>(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  const onClickAnother = () => {
    setAnotherCounter((prev) => prev + 1);
  };

  return (
    <div>
      <p>uk useState test</p>
      <div className="container">
        <div>
          <button onClick={onClick}>click</button>
          <span>counter: {counter}</span>
        </div>
        <div>
          <button onClick={onClickAnother}>click</button>
          <span>another counter: {anotherCounter}</span>
        </div>
      </div>
    </div>
  );
};
