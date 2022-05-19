const defaultState = {
  customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const ASYNC_ADD_MANY_CUSTOMERS = "ASYNC_ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      console.log(action);
      return { ...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(c => c.id !== action.payload) };
    default:
      return state;
  }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
export const addManyCustomersActionAsync = () => ({ type: ASYNC_ADD_MANY_CUSTOMERS });
