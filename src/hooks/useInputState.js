import { useState } from "react"

const useInputState = (defaultValue=null) =>{
    const [value,setValue]=useState(defaultValue);
     
    // system 1
    // const handleChange = e =>{
    //     setValue(e.target.value)
    // }
    // return [value,handleChange]

    // system 2
    const onChange = e =>{
        setValue(e.target.value)
    }
    return {value,onChange}
}
export default useInputState;