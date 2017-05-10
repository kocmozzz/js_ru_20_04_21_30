import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  openedId: PropTypes.string
}

function ArticleList(props) {
  const {articles, openedId, toggleOpen} = props

  const elements = articles.map(article => <li key={article.id}>
      <Article article={article}
               isOpen={article.id == openedId}
               toggleOpen={toggleOpen(article.id)}
      />
  </li>)

  return <ul>{elements}</ul>;
}

export default accordion(ArticleList);
