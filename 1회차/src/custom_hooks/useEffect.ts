import { useState } from './useState';

export const useEffect = (callback: Function, dependency: any[]) => {
  const [prevState, setPrevState] = useState<any[]>(dependency);
  const [hasMounted, setHasMounted] = useState(false);

  const hasChanged =
    prevState.length === 0 || prevState.some((state, i) => state !== dependency[i]);

  if (!hasMounted || hasChanged) {
    callback();

    setPrevState(dependency);

    if (!hasMounted) {
      setHasMounted(true);
    }
  }
};
