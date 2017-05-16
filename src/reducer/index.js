import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import daterange from './daterange'

export default combineReducers({
    counter: counterReducer,
    articles,
    selection: select,
    daterange
})
