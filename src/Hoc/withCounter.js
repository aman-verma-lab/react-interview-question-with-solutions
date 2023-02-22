import { useState } from "react";

const withCounter =(WrappedComp, IncrementVal=1) => {
    return (props) => {
      const [count, setCount] = useState(0);
      const incrementCounter = () => {
        setCount(count + IncrementVal);
      }
      const decrementCounter = () => {
        setCount(count - IncrementVal);
      }
      return (
        <WrappedComp count={count} increment={incrementCounter} decrement={decrementCounter}  {...props} />
      );
    }
}

export default withCounter;