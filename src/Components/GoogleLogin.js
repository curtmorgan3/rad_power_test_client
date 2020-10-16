import React from 'react';
import { useGoogleAuth } from './Helpers/GoogleAuthProvider';
import { Button } from '@material-ui/core';

const GoogleLogin = () => {
    const { signIn } = useGoogleAuth();

    return (
        <Button onClick={signIn}>Login with Google</Button>
      );
};

export default GoogleLogin;