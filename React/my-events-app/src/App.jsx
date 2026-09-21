// import React from "react";

// function App(){

//   function greet(){
//     alert(`Good Evening to user`)
//   }



//   return(
//     <button onClick={greet}>
//     Click me  
//     </button>
//   )

// }

// export default App

import React from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
    <input
    type="text"
    placeholder="Search..."

    onChange={ (e)=> setText(e.target.value) }

    />
    
    <h2>You Typed : {text}</h2>
    </>
  );
}

export default App;
