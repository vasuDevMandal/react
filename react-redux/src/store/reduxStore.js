import { createStore } from "redux";

const intitalState = { counter: 10, employees: 100000 };

const reducerFn = (state = intitalState, action) => {
  //   if (action.type === "INC") {
  //     return { counter: state.counter + 1 };
  //   }
  //   if (action.type === "DEC") {
  //     return { counter: state.counter - 1 };
  //   }

  //   if (action.type === "ADD_VALUE") {
  //     return { counter: state.counter + action.payload };
  //   }
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "ADD_VALUE":
      return { ...state, counter: state.counter + action.payload };
    case "ADD_EMP":
      return { ...state, employees: state.employees + 1 };
    default:
      return state;
  }

  return state;
};

const myStore = createStore(reducerFn);

export default myStore;
