// Reusable BookCard Component
/*function BookCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        width: "320px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        color: "#000000", // ✅ TEXT COLOR FIX
      }}
    >
      <h3 style={{ margin: 0, color: "#000000" }}>
        Title: {props.title}
      </h3>
      <p style={{ marginTop: 8, color: "#333333" }}>
        Author: {props.author}
      </p>
    </div>
  );
}

// Parent Component
export default function Page() {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaeaea", // ✅ darker background
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#000000" }}>
        Book List
      </h1>

      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}
  */


//use state
//'use client';
//import { useState } from "react";
//import React from "react";
/*
export default function page(){
  const [clr, setclr] = useState({color:"blue"});
  const changecolor=()=>{
    setclr({color:"red"});
  }
  return(
    <div>
      <h1 style={clr}>Hello</h1>
      <button onClick={changecolor}>Change Text</button>
    </div>
  )
}
  */




  /*export default function Counter() {
   const [count, setCount] = useState(0);

   const increment = () => setCount(count + 1);
   const decrement = () => {
     if (count > 0) setCount(count - 1);
   };
   const reset = () => setCount(0);

  return (
    <div>
     <h2>Count: {count}</h2>
     <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
 }

 // ```jsx
// import { useState } from "react";

// export default function Toggle() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"}
//       </button>

//       {show && <p>This text is visible!</p>}
//     </div>
//   );
// }
// ```*/
/*export default function Page() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}*/
/*export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <p>Clicked: {count} times</p>
    </div>
  );
}*/


import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import MoodList from "./components/MoodList";

const moods = [
  { date: "2026-02-20", mood: "😄", description: "Feeling happy today!" },
  { date: "2026-02-19", mood: "😴", description: "Very tired after work." },
  { date: "2026-02-18", mood: "😎", description: "Chilled and relaxed." },
];

export default function Page() {
  return (
    <>
      <Header />
      <Section>
        <MoodList moods={moods} />
      </Section>
      <Footer />
    </>
  );
}