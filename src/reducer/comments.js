import {ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Record, OrderedMap} from 'immutable'

const CommentModel = Record({
  id: null,
  user: '',
  text: ''
})

const DefaultReducerState = Record({
  entities: new OrderedMap,
  loading: false,
  loaded: false
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action
    console.log(type);

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrayToMap(response, CommentModel))
                .set('loading', false)
                .set('loaded', true)
    }

    return comments
}
