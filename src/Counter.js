import React,{ useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count+1);
    const reset = ()=> setCount(0);
    return(
      <div className="App">
        <h1>Count</h1>
        <h2 className='count'>{count}</h2>
        <button id='increment' onClick={()=>handleClick()}>Increment</button>
        <button id='reset' onClick={()=>reset()}>Reset</button>
      </div>
    )
  }

  export default Counter;