import { useEffect } from './useEffect';
import { useState } from './useState';

export const useMemo = <T>(factory: () => T, dependencies: any[]) => {
  const [state, setState] = useState<{ value: T; dependencies: any[] }>({
    value: factory(),
    dependencies,
  });

  if (
    state.dependencies.length !== 0 &&
    state.dependencies.every((dep, index) => dep === dependencies[index])
  ) {
    return state.value;
  }

  return factory();
};
