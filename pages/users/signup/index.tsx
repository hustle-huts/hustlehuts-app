import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import SignUpHeader from '@/components/users/signup-header';
import styles from '../../../styles/Signup.module.css';
export default function SignUpName() {
    return (
        <div className={styles.container}>
            <SignUpHeader/>
            <form className={styles.form}>
                <div className={styles.form_row} style={{flexDirection:"row", display:'flex', justifyContent:'space-between'}}>
                    <div className={styles.name}>
                        <Input label='First Name'></Input>
                        
                    </div>
                    <div className={styles.name}>
                        <Input label='Last Name'></Input>
                        
                    </div>
                </div>
                <div className={styles.form_row}>
                    <Input type="password" label='Enter Your Password'></Input>
                    <Input type="email" disabled label='Email'></Input>
                    <Input label='Enter Phone Number'></Input>
                        {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}   
                </div>
                <div className={styles.btn_groups}>
                    <Button>Sign Up</Button>
                    
                </div>
           
            </form>
        </div>
    );
}