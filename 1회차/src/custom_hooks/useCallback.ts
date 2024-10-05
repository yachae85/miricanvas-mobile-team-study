import { useMemo } from './useMemo';

export const useCallback = <T extends Function>(callback: T, dependencies: any[]) => {
  return useMemo(() => callback, dependencies);
};
