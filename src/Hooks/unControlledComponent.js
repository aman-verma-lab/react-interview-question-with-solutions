import { useRef } from "react";

const UnControlledComponent = () => {
    const getInputRef = useRef();
    
    const handleClick = () => {
        getInputRef.current.value = '10';
    }

    return(
        <>
        <input type="text" ref={getInputRef}/>
        <button type="button" onClick={handleClick}>Show</button>
        </>
    )
}

export default UnControlledComponent;