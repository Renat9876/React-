
import { useState } from "react"
import Button from "../Button/button"
import Heading from "../Heading/heading"

const CounterApp = () => {

    const [counter, setCounter] = useState(0)

   const [showHeading, setShowHeading] = useState(false)

return (

    <>
  
  <Button title='+' onClick={()=>{ 
    // setCounter(counter +1)
    setCounter( (pre)=> pre +1 )
    }} />
  <Button title='showHeading' onClick={()=>{ 
    // setCounter(counter +1)
    setShowHeading( (pre)=> !pre )
    }} />
  <Button title='-' onClick={()=> { 
    // setCounter(counter -1)
    setCounter((pre)=>pre-1)
    }} />
  <Button title='console' onClick={()=> {console.log(counter)}} />

  {
    showHeading && <Heading title={counter}/>
   }

 
  </>
)
    

}
export default CounterApp;