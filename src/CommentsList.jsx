import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        const { comments } = this.props;

        if (!comments.length) {
          return <strong>Комментариев пока нет</strong>;
        }

        return (
            <ul>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </ul>
        );
    }
}
