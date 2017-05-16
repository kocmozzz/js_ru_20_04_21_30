import {
    INCREMENT,
    DELETE_ARTICLE,
    SELECT_ARTICLES,
    FILTER_ARTICLES_BY_ID,
    SELECT_DATE_RANGE,
    FILTER_ARTICLES_BY_DATERANGE
} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticles(selection) {
    return {
        type: SELECT_ARTICLES,
        payload: { selection }
    }
}

export function filterArticlesById(selection) {
    return {
        type: FILTER_ARTICLES_BY_ID,
        payload: { selection }
    }
}

export function selectDateRange({from, to}) {
    return {
        type: SELECT_DATE_RANGE,
        payload: { from, to }
    }
}

export function filterArticlesByDateRange({from, to}) {
    return {
        type: FILTER_ARTICLES_BY_DATERANGE,
        payload: { from, to }
    }
}
