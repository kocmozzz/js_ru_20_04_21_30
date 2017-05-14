import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        comments: PropTypes.array
    }

    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            comments: nextProps.comments
        });
    }

    getUid() {
    	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
    	});
    }

    addComment = (comment) => {
        // тут конечно нужен уникальный id
        comment.id = this.getUid();
        this.state.comments.push(comment);

        this.setState({comments: this.state.comments});
    }

    getBody(comments, isOpen) {
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        return (
            <div>
                <CommentForm onSubmit={this.addComment} />
                <ul>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
            </div>
        )
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody(this.state.comments, isOpen)}
            </div>
        )
    }
}

export default toggleOpen(CommentList)
