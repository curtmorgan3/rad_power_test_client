import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../redux/actions';
import { useGoogleAuth } from './Helpers/GoogleAuthProvider';
import { Button } from '@material-ui/core';
import Ajax from '../Ajax';

const GoogleLogin = () => {
    const { signIn } = useGoogleAuth();
    const dispatch = useDispatch();

    const handleSignIn = async () => {
      const res = await signIn();
      
      if (res && res.profileObj) {
        const token = await Ajax.authenticate({ username: res.profileObj.name });
        if (token) {
          localStorage.setItem('rad_power_test_token', token);
          dispatch(setAuthToken(token));
        }
      }
    }

    return (
        <Button onClick={handleSignIn}>Login with Google</Button>
      );
};

export default GoogleLogin;