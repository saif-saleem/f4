// import {createStore} from 'redux';

// import WordReducer from './WordReducer';

// const store= createStore(WordReducer);

// export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import historySlice from './historyslice'

// export default configureStore({
//   reducer: {historySlice}
// })


import { createStore } from 'redux';
import rootReducer from './reducer'; // Create this file

const store = createStore(rootReducer);

export default store;
