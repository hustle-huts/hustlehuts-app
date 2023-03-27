import LoginForm from '@/components/users/login-form'
import Image from 'next/image'
import Logo from './/../../public/images/logo.png'
export default function SignUp() {
    return (
        <>
            <Image alt="" src={Logo} style={{ width: '50%', height: 'auto', margin:'40px 0px' }} width="600" height="300" />
            <LoginForm></LoginForm>

        </>
    );
}