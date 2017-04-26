import React, {Component} from 'react';
import CommentsList from './CommentsList';
import Toggler from './Toggler';

export default class Article extends Component {
    state = {
        isOpen: false
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
        const { comments = [] } = article;
        const { showComments } = this.state;
        const togglerProps = {
          activeText: "Скрыть комментарии",
          inactiveText: "Показать комментарии",
          labelShown: !!comments.length,
          isOpen: !comments.length
        };

        return this.state.isOpen && (
            <article>
                <div>{article.text}</div>
                <Toggler {...togglerProps}>
                  <CommentsList comments={comments} />
                </Toggler>
            </article>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
