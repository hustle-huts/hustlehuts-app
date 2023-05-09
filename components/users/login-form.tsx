import React, { useEffect, useState } from 'react';
import GoogleIcon from '../icons/google_icon';
import FacebookIcon from '../icons/facebook-icon';
import OutlookIcon from '../icons/outlook-icon';
import Button from '../ui/button';
import Input from '../ui/input';
import styles from './login-form.module.css';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
import axios from 'axios';


interface Values {
    username: string;
    password: string;
}

declare global {
    interface Window {
        google: any;
    }
}

// This is for the main login/signup page with Google, FB and Outlook sign in 
export default function LoginForm() {
    const [tokenResponse, setTokenResponse] = useState<TokenResponse | null>();
    const [user, setUser] = useState<any>(null);

    const googleLogin = useGoogleLogin({
        onSuccess: async tokenResponse => {
        const userInfo = await axios
            .get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            })
            .then((res: { data: any; }) => res.data);
        console.log("hello");
        setTokenResponse(tokenResponse);
        setUser(userInfo);
        },
        onError: errorResponse => console.log(errorResponse),
    });


    return (
        <form className={styles.form}>
            <div className={styles.form_row}>
                <Input error="Only alphabetical characters allowed!" isRequired={true} label='Enter Your Email to Begin'></Input>
                    {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}
                
            </div>
            <div className={styles.btn_groups}>
                <Button>Login</Button>
                <Button btntype='secondary'>Sign Up</Button>
                <span className={styles.line}>
                    <div style={{flex: 1, height: '1px', backgroundColor: 'black', width:'40%'}} />
                    <h3>OR</h3>
                    <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                </span>


                <Button clickEvent={() => googleLogin()} icon={<GoogleIcon />} btntype="outline">
                    Sign Up with Google
                </Button>
                <Button icon={<FacebookIcon/>} btntype="outline">Sign Up with Facebook</Button>
                <Button icon={<OutlookIcon/>} btntype="outline">Sign Up with Outlook</Button>
            </div>
           
        </form>
    );
  };