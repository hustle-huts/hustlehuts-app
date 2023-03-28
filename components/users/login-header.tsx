import styles from './login-header.module.css';
import LogIn1 from '../../public/images/login1.png'
import LogIn2 from '../../public/images/login2.png'
import SignUp1 from '../../public/images/signup1.png'
import SignUp2 from '../../public/images/signup2.png'
import SignUp3 from '../../public/images/signup3.png'
import LocationPointer from '../../public/images/arrow.png'
import Image from 'next/image';
export default function LoginHeader() {
    
    return (
        <div className={styles.container}>
            <Image className={styles.login1}  style={{ width: '14%', height: '21%', objectFit:"contain" }} alt="" src={LogIn1}  width="600" height="300" />
            <Image className={styles.login2}  style={{ width: '9%', height: '9%', objectFit:"contain" }} alt="" src={LogIn2}  width="600" height="300" />
            <Image className={styles.signup1}  style={{ width: '12%', height: '22%', objectFit:"contain" }} alt="" src={SignUp1}  width="600" height="300" />
            <Image className={styles.arrow}  style={{ width: '6%', height: '6%', objectFit:"contain" }} alt="" src={LocationPointer}  width="600" height="300" />
            <Image className={styles.signup2}  style={{ width: '28%', height: '20%', objectFit:"contain" }} alt="" src={SignUp2}  width="600" height="300" />
            <Image className={styles.signup3}  style={{ width: '12%', height: '12%', objectFit:"contain" }} alt="" src={SignUp3}  width="600" height="300" />
        </div>
    );
}