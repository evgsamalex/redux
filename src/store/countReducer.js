const defaultState = {
  count: 0,
}

export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export const incrementAction = (payload) => ({ type: INCREMENT, payload })
export const decrementAction = (payload) => ({ type: DECREMENT, payload })
export const incrementActionAsync = (payload) => ({ type: ASYNC_INCREMENT, payload })
export const decrementActionAsync = (payload) => ({ type: ASYNC_DECREMENT, payload })
