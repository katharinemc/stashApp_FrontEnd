export const CHANGE_LANDING = 'CHANGE_LANDING';

export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

export const changeLanding = (displayType) => ({
  type: CHANGE_LANDING,
  displayType    
});

export const submitRegistration = (newUserObj) => ({
  type: SUBMIT_REGISTRATION,    
  newUserObj
});

export const submitLogin = (loginObj) => ({
  type: SUBMIT_LOGIN,
  loginObj
});

export const setLoginStatus = (loginStatus) => ({
  type: SET_LOGIN_STATUS,
  loginStatus
});