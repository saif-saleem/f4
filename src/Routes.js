// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// // import Home from './components/Home';
// import History from '../src/Components/History';
// import Dictionary from './Components/Dictionary';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Dictionary} />
//         <Route path="/history" component={History} />
//       </Switch>
    
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import Home from './components/Home';
import History from '../src/Components/History';
import Dictionary from './Components/Dictionary';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dictionary} />
        <Route path="/history" component={History} />
      </Switch>
    
    </Router>
  );
}

export default App;
