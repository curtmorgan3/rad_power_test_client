import React from 'react';
import { useGoogleAuth } from './Helpers/GoogleAuthProvider';
import { Button } from '@material-ui/core';

const GoogleLogin = () => {
    const { signIn } = useGoogleAuth();

    const handleSignIn = async () => {
      const res = await signIn();
      console.log(res);
    }

    return (
        <Button onClick={handleSignIn}>Login with Google</Button>
      );
};

export default GoogleLogin;