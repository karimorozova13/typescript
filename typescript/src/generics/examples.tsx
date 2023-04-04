// example of fabric function

type TStatusState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

const makeState = <S,>(initialState: S) => {
  let state = initialState;
  const getState = () => {
    return state;
  };
  const setState = (newState: S) => {
    state = newState;
    return state;
  };
  return {
    getState,
    setState,
  };
};

const animationState = makeState<TStatusState>("paused");
const httpState = makeState<THttpState>("success");

console.log(animationState.getState());
console.log(httpState.getState());

export {};
