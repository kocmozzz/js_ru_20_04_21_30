import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, art) => ({
    ...acc, [art.id]: art
}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            delete articles[payload.id];
            return articles;

        case ADD_COMMENT:
            articles[payload.articleId].comments.push(payload.id);

            articles[payload.articleId].comments = articles[payload.articleId].comments.slice();

            return Object.assign({}, articles);
    }

    return articles
}
