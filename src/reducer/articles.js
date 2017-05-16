import { DateUtils } from 'react-day-picker'
import {articles as defaultArticles} from '../fixtures'
import {
    DELETE_ARTICLE,
    FILTER_ARTICLES_BY_ID,
    FILTER_ARTICLES_BY_DATERANGE
} from '../constants'

const initialState = {
    articles: defaultArticles
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.assign({}, {articles: state.articles.filter(article => article.id !== payload.id)})
        case FILTER_ARTICLES_BY_ID:
            const dictionary = payload.selection.reduce((acc, cur) => {
                acc[cur.value] = cur.label
                return acc
            }, {})

            if(!payload.selection.length) {
                return Object.assign({}, initialState);
            }

            return Object.assign({}, {
                articles: initialState.articles.filter(({id}) => dictionary.hasOwnProperty(id))
            })
        case FILTER_ARTICLES_BY_DATERANGE:
            const {from, to} = payload

            if(!from && !to) return Object.assign({}, initialState)

            return Object.assign({}, {
                articles: initialState.articles.filter(({date}) => {
                    const articleDate = new Date(date);

                    if (!to || from && to && DateUtils.isSameDay(from, to)) {
                        return DateUtils.isSameDay(articleDate, from)
                    }

                    return DateUtils.isDayBetween(articleDate, from, to)
                })
            });
            break;
    }

    return state
}
