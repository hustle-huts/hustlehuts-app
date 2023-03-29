import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import LoginHeader from '@/components/users/login-header';
import styles from '../../../styles/Login.module.css';
export default function LogInPage() {
    return (
        <div className={styles.container}>
            <LoginHeader/>
            <h1 className={styles.title}>Log In</h1>
            <form className={styles.form}>
                <div className={styles.form_row}>
                    <Input type="password" label='Enter Password' isRequired={true}></Input>
                </div>
                <div className={styles.btn_groups}>
                    <Button>Log In</Button>
                </div>
            </form>
        </div>
    );
}