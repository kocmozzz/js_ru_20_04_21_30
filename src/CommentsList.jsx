import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        const { comments } = this.props;

        return (
            <ul>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </ul>
        );
    }
}
