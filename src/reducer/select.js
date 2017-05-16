import {articles as defaultArticles} from '../fixtures'
import {SELECT_ARTICLES} from '../constants'

// не уверен, что дефолтное значение надо пробрасывать так...
const initialState = {
    articles: defaultArticles,
    selection: []
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_ARTICLES:
            return Object.assign({}, state, {selection: payload.selection})
    }

    return state
}
