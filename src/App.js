// import React from 'react'
// import Navbar from './Components/Navbar'
// import Dictionary from './Components/Dictionary'




// const App = () => {








//   return (
//     <div>
//    <Navbar/>
//    <Dictionary/>
   
//     </div>
//   )
// }

// export default App




import React from 'react';
import Navbar from './Components/Navbar'

import {Routes, Route } from 'react-router-dom';

import History from '../src/Components/History';
import Dictionary from './Components/Dictionary';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Dictionary/>} />
        <Route path="/history" element={<History/>} />
    </Routes>
    </>
  );
}

export default App;
