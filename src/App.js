import React from 'react';
import { useState } from 'react';

function App() {
  const [outputText, setOutputText] = useState('Initial text');

  function updateTextHandler() {
    setOutputText('Text was changed');
  }

  return (
    <>
      <button onClick={updateTextHandler}>Click to change text</button>
      <p>{outputText}</p>
    </>
  );
}

// function App() {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitHandler() {
//     setIsSubmitted(true);
//   }
//   return (
//     <button onClick={submitHandler}>
//       {isSubmitted ? 'Loading…' : 'Submit'}
//     </button>
//   );
// }

// function Greeting() {
//   return <p>Welcome to this book!</p>;
// }

// function App() {
//   return (
//     <div>
//       <h2>Hello World!</h2>
//       <Greeting />
//     </div>
//   );
// }

export default App;
