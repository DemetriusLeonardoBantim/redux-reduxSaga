import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer'
import {ICartState} from './modules/cart/types'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]


export interface IState {
  cart: ICartState
}

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(...middlewares)
))

sagaMiddleware.run(rootSaga)

export default store 