
import { useEffect } from 'react'
import './index.module.css'
import styles from './index.module.css'

const Heading = (props) => {

    useEffect(()=>{
        console.log('component yarandi (mount) ')
    },[])

    useEffect(()=>{
      console.log('componenti deyisdin ve men bunu gordum ')
    },[props.title])

    useEffect(()=>{
      return (()=>{
        console.log('componentden cixdin cmponent silindi (unmount) ')
      })
    },[])

    return (

        <>
        <h1 onClick={props.clickleyende} className={styles.title}>{props.title}</h1>
        
        </>
    )

}


export default Heading;