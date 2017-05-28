import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../components/Comment'
import Loader from '../components/Loader'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadCommentsByPage} from '../AC/index'
import {mapToArr} from '../utils'
import {commentsIdsArraySelector} from '../selectors'
import Pagination from '../components/Pagination'

class CommentsPage extends Component {
    static propTypes = {
        //from react-router
        comments: PropTypes.array,
        match: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        isLoaded: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
    };

    static defaultProps = {
        comments: []
    };

    componentDidMount() {
        this.props.loadCommentsByPage(this.props.match.params.page);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.match.params.page != this.props.page
            && !nextProps.isLoading
            && nextProps.loadCommentsByPage(nextProps.match.params.page);
    }

    render() {
        const {
            match,
            comments,
            isLoading,
            isLoaded,
            total,
            page,
            limit
        } = this.props

        if(isLoading && !isLoaded) {
            return <div>{<Loader />}</div>
        }

        return (
            <div>
                <Pagination page={page} total={total} limit={limit} baseUrl='/comments/' />
                <ul>
                  {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
            </div>
        )
    }
}

export default connect((state) => {
    const { total, page, limit, loading: isLoading, loaded: isLoaded } = state.comments

    return {
        comments: commentsIdsArraySelector(state),
        isLoading,
        isLoaded,
        total,
        page,
        limit
    }
}, {loadCommentsByPage})(CommentsPage)
