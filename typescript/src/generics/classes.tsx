type TAnimatedState = "playing" | "paused";
type THttpState = "request" | "error" | "success";

class State<S> {
  private state: S;
  constructor(initialState: S) {
    this.state = initialState;
  }
  public getState() {
    return this.state;
  }
  public setState(newState: S) {
    this.state = newState;
    return this.state;
  }
}

const animatedState = new State<TAnimatedState>("playing");
const httpState = new State<THttpState>("request");
animatedState.setState("paused");
console.log(animatedState.getState());
console.log(httpState);

export {};
