// History.js
import React from 'react';
import { useSelector } from 'react-redux';


const History=()=>{
  const jsonData= useSelector(state=>state.jsonData)
  console.log(jsonData)
  const a=localStorage.getItem("word")
 
  return (
    <div>
     <h1>{a}</h1>
      {/* Render your component using the 'jsonData' */}
      {jsonData && (
        <pre>
          <code>{JSON.stringify(jsonData, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}



export default History;
