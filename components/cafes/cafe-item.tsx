import styles from './cafe-item.module.css';
import Button from '../ui/button';
interface props {
    className?: string;
    isOpen: boolean;
    modalHandler?: Function;
    closeHandler?: Function;
}

const CafeItem:React.FC<props> = (props) => {
    return (
        <div className={styles.card} >
            <img src="" alt="" />
            <h3>Star</h3>
            <h1>Name</h1>
            <h2>time</h2>
            <h2>Distance</h2>
            <div>
                <Button btntype="primary">Click</Button>
                <Button btntype='secondary'>Click</Button>
            </div>
        </div>
    );
}

export default CafeItem;