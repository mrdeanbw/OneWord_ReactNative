import * as types from './types';
// export const login = (userName) => async dispatch => {
//   let userName = '';
//   dispatch({ type: LOGIN_SUCCESS, userName: userName });
// }

export const login = (userName) => async (dispatch, store) => {
  console.log('here is actions/auth/login', userName);

  dispatch(loginSuccess({userName}));
}

function loginSuccess(data) {
  console.log('data', data)
  return {type : types.LOGIN_SUCCESS, ...data};
}