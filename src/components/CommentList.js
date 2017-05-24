import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './Loader'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {loadAllComments} from '../AC'
import {connect} from 'react-redux'

class CommentList extends Component {

  componentWillReceiveProps({isLoading, isLoaded, isOpen, loadAllComments, article}) {
      if (!isLoading && isOpen && isOpen != this.props.isOpen) loadAllComments(article.id)
  }

  render() {
    const {isOpen, toggleOpen, isLoading} = this.props

    if (isLoading) return <Loader />

    const linkText = isOpen ? 'hide comments' : 'show comments'

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{linkText}</a>
            {getBody(this.props)}
        </div>
    )
  }
}

function getBody(props) {
    const {article: { id, comments = [] }, isOpen} = props
    if (!isOpen) return null
    if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {id}/></div>
    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default connect((state) => {
    return {
        isLoading: state.comments.loading,
        isLoaded: state.comments.loaded
    }
}, {loadAllComments})(toggleOpen(CommentList))
