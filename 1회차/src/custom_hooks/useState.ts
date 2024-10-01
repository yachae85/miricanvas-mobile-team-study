import { testRender } from '../render';

let key = 0; // state의 index에 접근하기 위한 key
const state = [] as any[]; // state를 관리하는 배열

export const useState = <T>(
  initialValue: T,
): [T, (newState: T | ((prevState: T) => T)) => void] => {
  const currentKey = key; // useState가 호출됐을때 currentKey = 몇번째 index에 접근해야되는지
  if (state[currentKey] === undefined) {
    // 현재에 해당하는 값이 없으면 initialValue로 초기화
    state[currentKey] = initialValue;
  }

  const setState = (newState: T | ((prevState: T) => T)) => {
    // 새로운 상태가 함수인지 확인
    if (typeof newState === 'function') {
      // 함수라면 이전 상태를 기반으로 새로운 상태를 계산
      state[currentKey] = (newState as (prevState: T) => T)(state[currentKey]);
    } else {
      // 함수가 아니라면 직접 새로운 상태로 설정
      state[currentKey] = newState;
    }

    key = 0; // 다음 렌더링을 위해 key 초기화
    testRender(); // 컴포넌트를 다시 렌더링하여 변경된 상태를 반영
  };

  key++; // 다음 useState 호출을 위해 키 증가

  return [state[currentKey], setState];
};
