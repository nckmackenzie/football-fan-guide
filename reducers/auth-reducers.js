import { INPUT_CHANGE, INPUT_BLUR } from '../utils/actionTypes';
export const authReducers = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      if (
        action.e.target.type === 'password' &&
        action.e.target.value.length < 8
      ) {
        return {
          ...state,
          [action.e.target.id]: {
            touched: true,
            value: action.e.target.value,
            err: null,
            isInvalid: true,
          },
        };
      }
      return {
        ...state,
        [action.e.target.id]: {
          touched: true,
          value: action.e.target.value,
          err: null,
          isInvalid: false,
        },
      };
    case INPUT_BLUR:
      if (action.e.target.value.trim() === '') {
        return {
          ...state,
          [action.e.target.id]: {
            isInvalid: true,
            err: 'Field is required',
            touched: true,
            value: '',
          },
        };
      }
      if (
        action.e.target.id === 'email' &&
        !action.e.target.value.includes('@')
      ) {
        return {
          ...state,
          email: {
            touched: true,
            value: action.e.target.value,
            isInvalid: true,
            err: 'Invalid email provided',
          },
        };
      }
      if (
        action.e.target.type === 'password' &&
        action.e.target.value.length < 8
      ) {
        return {
          ...state,
          [action.e.target.id]: {
            touched: true,
            value: action.e.target.value,
            isInvalid: true,
            err: 'Password has to be 8 characters and above',
          },
        };
      }
      return { ...state };

    default:
      return state;
  }
};
