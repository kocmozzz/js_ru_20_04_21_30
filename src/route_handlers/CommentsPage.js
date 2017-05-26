import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../components/Comment'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadCommentsByPage} from '../AC/index'
import {mapToArr} from '../utils'
import {commentsIdsArraySelector} from '../selectors'

class CommentsPage extends Component {
    static propTypes = {
        //from react-router
        comments: PropTypes.array,
        match: PropTypes.object.isRequired
    };

    static defaultProps = {
        comments: []
    };

    componentDidMount() {
      this.props.loadCommentsByPage(this.props.match.params.page);
    }

    render() {
        const {match, comments} = this.props

        return (
            <div>
                <ul>
                  {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
            </div>
        )
    }
}

export default connect((state) => ({
  comments: commentsIdsArraySelector(state)
}), {loadCommentsByPage})(CommentsPage)
