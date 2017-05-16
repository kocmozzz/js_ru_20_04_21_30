import {articles as defaultArticles} from '../fixtures'
import {SELECT_DATE_RANGE} from '../constants'

const initialState = {
    from: null,
    to: null
}

export default (state = initialState, action) => {
    const {type, payload = {}} = action
    const {from, to} = payload

    switch (type) {
        case SELECT_DATE_RANGE:
            return Object.assign({}, state, {from, to})
    }

    return state
}
