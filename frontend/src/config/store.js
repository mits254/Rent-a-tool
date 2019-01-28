import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({

})
const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
)
export default store