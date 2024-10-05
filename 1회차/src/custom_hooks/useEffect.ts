import { useRef } from 'react';

export const useEffect = (callback: Function, dependency?: any[]) => {
  // 추후 useRef도 커스텀으로
  // 이전 상태 관리
  const prevState = useRef<any[] | undefined>();
  // 마운트(최초 1회 실행)됐는지
  const hasMounted = useRef(false);

  // dependency가 있을 경우 변경사항 체크, 없으면 항상 재실행
  const hasChanged =
    prevState.current !== undefined && dependency !== undefined
      ? prevState.current.length === 0 ||
        prevState.current.some((state, i) => state !== dependency[i])
      : true;

  // 변경사항이 있거나 최초 마운트시 callback 실행
  if (!hasMounted.current || hasChanged) {
    callback();
    prevState.current = dependency;

    if (!hasMounted.current) {
      hasMounted.current = true;
    }
  }
};
