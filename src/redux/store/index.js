// import { createStore, applyMiddleware, compose  } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"
import { dataReducer } from '../reducers/dataReducer'
import { UIReducer } from '../reducers/UIReducer'

// OLD WAY OF DOING IT
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(
//       applyMiddleware(thunk)
//     ));

// export default store;

const store = configureStore({
  reducer: combineReducers({
    dataReducer,
    UIReducer
  }),
  middleware: getDefaultMiddleware(),
  devTools: true
})

export default store