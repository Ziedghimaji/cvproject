import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/reducer'

const initState={}

const store=createStore(
    rootReducer,
    initState,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store