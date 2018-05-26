export const CHANGE_LANDING = 'CHANGE_LANDING';

export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';

export const LOGIN_USER = 'LOGIN_USER';


export const changeLanding = (displayType) => ({
  type: CHANGE_LANDING,
  displayType    
});

export const submitRegistration = (newUserObj) => ({
  type: SUBMIT_REGISTRATION,    
  newUserObj
});

export const loginUser = (loginObj) => ({
  type: LOGIN_USER,
  loginObj
});