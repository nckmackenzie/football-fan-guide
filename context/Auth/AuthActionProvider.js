import { useReducer, useContext } from 'react';
import AuthAction from './auth-actions';
import { authReducers } from '../../reducers/auth-reducers';

const initialState = {
  name: { value: '', isInvalid: false, touched: false, err: null },
  email: { value: '', isInvalid: false, touched: false, err: null },
  password: { value: '', isInvalid: false, touched: false, err: null },
  confirmPassword: { value: '', isInvalid: false, touched: false, err: null },
};
const AuthActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducers, initialState);
  return (
    <AuthAction.Provider value={{ state, dispatch }}>
      {children}
    </AuthAction.Provider>
  );
};

export const useAuthActions = () => {
  return useContext(AuthAction);
};

export default AuthActionProvider;
