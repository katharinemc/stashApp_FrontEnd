export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';
export const isEmail = value => 

/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? undefined : 'Must be valid email';

export const passwordLength = value => value && value.length > 7 && value.length < 10 ? undefined : 'Password must be between 7 and 10 characters'
export const passwordsMatch = (value, allValues) => 
  value !== allValues.password ? 'Passwords don\'t match' : undefined;