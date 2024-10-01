import { useMemo } from '../custom_hooks/useMemo';
import { useEffect } from '../custom_hooks/useEffect';
import { useState } from '../custom_hooks/useState';

export const TestComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  const [anotherCounter, setAnotherCounter] = useState<number>(0);
  const [thirdCounter, setThirdCounter] = useState<number>(0);
  const tempMemo = useMemo(() => Boolean(counter % 2), [counter]);
  console.log(tempMemo);

  const onClick = () => {
    setCounter(counter + 1);
  };

  const onClickAnother = () => {
    setAnotherCounter((prev) => prev + 1);
  };

  const onClickThird = () => {
    setThirdCounter(thirdCounter + 1);
  };

  useEffect(() => {
    console.log('counter or antherCounter changed');
    console.log('counter: ', counter);
    console.log('anotherCounter: ', anotherCounter);
  }, [counter, anotherCounter]);

  // useEffect(() => {
  //   console.log('custom useMemo');
  //   console.log('meoization value: ', tempMemo);
  // }, [counter]);

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
          <span>second counter: {anotherCounter}</span>
        </div>
        <div>
          <button onClick={onClickThird}>click</button>
          <span>third counter: {thirdCounter}</span>
        </div>
      </div>
    </div>
  );
};
