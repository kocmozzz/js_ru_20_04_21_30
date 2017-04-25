import React, {Component} from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component {
    state = {
        isOpen: false,
        showComments: false
    }

    render() {
        const {article} = this.props;

        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        const { article } = this.props;
        const { comments } = article;
        const { showComments } = this.state;

        return this.state.isOpen && (
            <div>
                <div>{article.text}</div>
                {
                    comments && comments.length
                    ? this.getCommentsLink()
                    : this.getEmptyCommentsLink()
                }
                { showComments && <CommentsList comments={comments} /> }
            </div>
        )
    }

    getCommentsLink() {
        const { showComments } = this.state;

        return (
            <a href="#" onClick={this.toggleComments}>
                {
                    showComments
                    ? <span>Скрыть комментарии</span>
                    : <span>Показать комментарии</span>
                }
            </a>
        )
    }

    getEmptyCommentsLink() {
        return (<strong>Комментариев пока нет</strong>);
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleComments = (ev) => {
        ev.preventDefault();

        this.setState({
            showComments: !this.state.showComments
        });
    }
}
