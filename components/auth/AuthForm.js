import Link from 'next/link';
import { Typography } from '@mui/material';
import BasicButton from '../ui/BasicButton';
import BasicTextField from '../ui/BasicTextField';
import GoogleIcon from '@mui/icons-material/Google';
import ButtonLikeDiv from '../ui/ButtonLikeDiv';
import { useAuthActions } from '../../context/Auth/AuthActionProvider';
import { INPUT_CHANGE, INPUT_BLUR } from '../../utils/actionTypes';
import BasicCircularProgress from '../ui/BasicCircularProgress';

export default function AuthForm({
  type,
  authHandler,
  oauthHandler,
  isLoading,
}) {
  const { state, dispatch } = useAuthActions();
  const onChangeHander = e => {
    dispatch({ type: INPUT_CHANGE, e });
  };
  const onBlurHander = e => {
    dispatch({ type: INPUT_BLUR, e });
  };

  let formIsValid;
  if (type === 'login') {
    formIsValid =
      !state.email.isInvalid &&
      state.email.touched &&
      !state.password.isInvalid &&
      state.password.touched;
  }
  if (type === 'register') {
    formIsValid =
      !state.email.isInvalid &&
      state.email.touched &&
      !state.name.isInvalid &&
      state.name.touched &&
      !state.password.isInvalid &&
      state.password.touched;
    !state.confirmPassword.isInvalid && state.confirmPassword.touched;
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    let data;
    if (type === 'login') {
      data = {
        email: state.email.value,
        password: state.password.value,
        type: 'login',
      };
    }
    if (type === 'register') {
      data = {
        email: state.email.value,
        name: state.name.value,
        password: state.password.value,
        type: 'register',
      };
    }
    authHandler(data);
  };

  const googleOAuthHandler = () => {
    oauthHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {type === 'register' && (
        <BasicTextField
          id="name"
          label="Full Name"
          fullWidth={true}
          value={state.name.value}
          onChange={onChangeHander}
          onBlur={onBlurHander}
          error={state.name.isInvalid}
          helperText={state.name.err}
        />
      )}
      <BasicTextField
        id="email"
        type="email"
        label="Email"
        fullWidth={true}
        value={state.email.value}
        onChange={onChangeHander}
        onBlur={onBlurHander}
        error={state.email.isInvalid}
        helperText={state.email.err}
      />
      <BasicTextField
        id="password"
        type="password"
        label="Password"
        fullWidth={true}
        value={state.password.value}
        onChange={onChangeHander}
        onBlur={onBlurHander}
        error={state.password.isInvalid}
        helperText={state.password.err}
      />
      {type === 'register' && (
        <BasicTextField
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          fullWidth={true}
          value={state.confirmPassword.value}
          onChange={onChangeHander}
          onBlur={onBlurHander}
          error={state.confirmPassword.isInvalid}
          helperText={state.confirmPassword.err}
        />
      )}
      {!isLoading ? (
        <BasicButton
          type="submit"
          sx={{ width: '100%', marginBottom: '0.5rem' }}
          disabled={!formIsValid}
        >
          {`${type === 'login' ? 'Login' : 'Register'}`}
        </BasicButton>
      ) : (
        <BasicCircularProgress />
      )}

      <Typography
        variant="h6"
        component="p"
        align="center"
        sx={{ fontSize: '14px' }}
      >
        OR
      </Typography>
      <BasicButton
        onClick={googleOAuthHandler}
        variant="outlined"
        startIcon={<GoogleIcon color="primary" />}
        sx={{ width: '100%', marginTop: '0.5rem', marginBottom: '0.5rem' }}
      >
        {`${type === 'login' ? 'Login with Google' : 'Register with Google'}`}
      </BasicButton>
      <Link href={`/auth?type=${type === 'login' ? 'register' : 'login'}`}>
        <a className="no-underline">
          <ButtonLikeDiv
            fullWidth
            disablePadding
            align="right"
            info={`${
              type === 'login'
                ? "Don't have an account? Sign up here"
                : 'Have an account? Log in'
            }`}
          />
        </a>
      </Link>
    </form>
  );
}
