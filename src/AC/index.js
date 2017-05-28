import $ from 'jquery'
import { INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_ALL_ARTICLES,
    LOAD_COMMENTS_BY_PAGE, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticlesComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        callAPI: `/api/comment?article=${articleId}`,
        payload: { articleId }
    }
}

export function loadCommentsByPage(page = 1, limit = 5) {
    return {
        type: LOAD_COMMENTS_BY_PAGE,
        callAPI: `/api/comment?limit=${limit}&offset=${(page - 1) * limit}`,
        payload: { page: +page, limit }
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            $.get(`/api/article/${id}`)
                .done(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {response, id}
                }))
                .fail(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {error, id}
                }))
        }, 1000)
    }
}
