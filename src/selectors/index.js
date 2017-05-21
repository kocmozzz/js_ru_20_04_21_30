import {createSelector} from 'reselect'

export const articlesGetter = state => state.articles
export const filtersGetter = state => state.filters
export const commentsGetter = state => state.comments
export const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('---', 'recompute filtrated articles')

    const {selected, dateRange: {from, to}} = filters
    const articlesKeys = Object.keys(articles)
    .filter(id => {
        const article = articles[id];
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });

    return articlesKeys;
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'find comment', id)

    return comments[id]
})

export const articlesListSelector = createSelector(articlesGetter, (articles) => {
    return Object.keys(articles).map(id => articles[id])
})

export const articleSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles[id];
})
