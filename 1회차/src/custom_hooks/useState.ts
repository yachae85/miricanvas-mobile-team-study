import { testRender } from '../render';

let key = 0; // state의 index에 접근하기 위한 key
const state = [] as any[]; // state를 관리하는 배열

export const useState = <T>(initialValue: T): [T, (newState: T) => void] => {
  const currentKey = key; // useState가 호출됐을때 currentKey = 몇번째 index에 접근해야되는지
  if (state[currentKey] === undefined) {
    // 현재에 해당하는 값이 없으면 initialValue로 초기화
    state[currentKey] = initialValue;
  }

  const setState = (newState: T) => {
    // setState 동작시 state[currentKey 업데이트]
    state[currentKey] = newState;
    // state update이후 key를 다시 0으로 초기화
    key = 0;
    // reRendering
    testRender();
  };

  key++; // 다음 useState 호출을 위해 키 증가

  return [state[currentKey], setState];
};
