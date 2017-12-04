import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';//中间件，异步请求解决方案
import thunkMiddleware from 'redux-thunk'//中间件，异步请求解决方案
import reducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState)
    return store
}
