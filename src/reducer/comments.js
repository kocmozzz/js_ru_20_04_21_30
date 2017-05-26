import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_BY_PAGE, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false,
    total: 0
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_BY_PAGE + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS_BY_PAGE + SUCCESS:
            return comments
              .set('entities', arrayToMap(response.records, CommentModel))
              .set('total', response.total)
              .set('loading', false)
              .set('loaded', true)
    }

    return comments
}
