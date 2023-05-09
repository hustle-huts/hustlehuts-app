import LoginForm from '@/components/users/login-form'
import Image from 'next/image'
import Logo from './/../../public/images/logo.png'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function SignUp() {
    return (
        <>
        <GoogleOAuthProvider clientId="554539700276-7ofmtmaendohcdss79l752c1e25leb7e.apps.googleusercontent.com">
            <Image alt="" src={Logo} style={{ width: '50%', height: 'auto', margin:'40px 0px' }} width="600" height="300" />
            <LoginForm></LoginForm>
        </GoogleOAuthProvider>
        </>
    );
}