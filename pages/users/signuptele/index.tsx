import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import SignUpHeader from '@/components/users/signup-header';
import styles from '../../../styles/SignupTele.module.css';
export default function SignUpTele() {
    return (
        <div className={styles.container}>
            <SignUpHeader/>
            <form className={styles.form}>
                <div className={styles.form_row}>
                    <Input label='Enter Telegram Handle'></Input>
                        {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}  
                </div>
                <div className={styles.btn_groups}>
                    <Button>Continue</Button>
                    
                </div>
           
            </form>
        </div>
    );
}