// src/reducers.js
const initialState = {
    jsonData: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JSON_DATA':
        return {
          ...state,
          jsonData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;