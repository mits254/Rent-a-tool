import { createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer';

const rootReducer = combineReducers({
    cart: cartReducer
})
const store = createStore(
    rootReducer, 
   + window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
)
export default store
// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

