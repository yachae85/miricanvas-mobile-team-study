import { useState } from '../custom_hooks/useState';

export const TestComponent = () => {
  const [] = useState();
  const [] = useState();

  return (
    <div>
      <p>uk useState test</p>
      <div>
        <span>counter: </span>
        <span>another counter: </span>
      </div>
    </div>
  );
};
