import { useRef } from 'react';

export const useEffect = (callback: Function, dependency?: any[]) => {
  // 추후 useRef도 커스텀으로
  const prevState = useRef<any[] | undefined>();
  const hasMounted = useRef(false);

  if (!hasMounted.current) {
    callback();
    hasMounted.current = true;
  }

  const hasChanged =
    prevState.current !== undefined && dependency !== undefined
      ? prevState.current.length === 0 ||
        prevState.current.some((state, i) => state !== dependency[i])
      : true;

  if (hasChanged) {
    callback();
    prevState.current = dependency;
  }
};
