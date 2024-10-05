import { useRef } from 'react';

export const useMemo = <T>(factory: () => T, dependencies: any[]) => {
  const prevState = useRef<{
    value: T;
    dependencies: any[];
  }>({
    value: factory(),
    dependencies,
  });

  // dependencies가 빈 배열이아니고 변경하상이 있으면 value를 다시 계산
  if (
    prevState.current.dependencies.length !== 0 &&
    prevState.current.dependencies.some((prev, i) => prev !== dependencies[i])
  ) {
    prevState.current = {
      value: factory(),
      dependencies,
    };
  }

  return prevState.current.value;
};
