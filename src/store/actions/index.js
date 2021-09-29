import * as ActionType from '../actionTypes';

export const depositMoney = amount => dispatch => {
  dispatch({
    type: ActionType.DEPOSIT,
    payload: amount,
  });
};

export const withdrawMoney = amount => {
  return dispatch => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
