import * as ActionType from '../actionTypes';

const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
