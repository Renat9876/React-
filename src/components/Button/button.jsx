
import './index.module.css'
import styles from './index.module.css'

const Button = ({title, onClick}) => {

    return (

        <>
        <button
        onClick={onClick} className={styles.btn}>

         {title}

        </button>
       
        </>
    )
}

export default Button;