// // example1. Connection Js to html
// import React from "react";
// import AddToCart from "../addtocart";

// function App() {
//   let name = "Nitish";

//   function greet() {
//     alert("Hello Good Night");
//   }

//   return (
//     <div>
//       <h2>My Name is {name}</h2>

//       <button onClick={greet}>Greet</button>

//       <AddToCart />
//     </div>
//   );
// }

// export default App;

//Variables in React - Example 1

// import React from "react";

// function App() {
//   let count = 10;

//   function increaseCount() {
//     count = count + 1
//     console.log(count)
//   }

//   return (
//     <>
//       <h2>Like/Cart/Quantity: {count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//     </>
//   );
// }

// export default App;

// useState - IT IS A SPECIAL REACT VARIABLE AND KNOWN AS HOOK
// IT STORES THE UPDATED VALUE AND ALSO UPDATE DATE/VALUE ON THE UI/SCREEN

//SYNTAX - const [MainVarlableName-show on screen , setVariableName - Updated value] = useState(Initial Value)

//  import React from "react";
//  import { useState } from "react"

// function App() {
//   const [like, setLike] = useState(16);

//   function increaseCount() {
//     setLike( like + 1);
//     console.log(like)
//    }

//   return (
//     <>
//       <h2>Like/Cart/Quantity: {like}</h2>
//       <button onClick={increaseCount}>Increase</button>
//     </>
//   );
// }

// export default App;

// 

import React from "react";
import { useState } from "react";

function App() {
  const [following, setFollowing] = useState(false);

  return (
    <>
      <button onClick={() => setFollowing(!following)}>{following ? "Following" : "Follow"}</button>
    </>
  );
}

export default App;
