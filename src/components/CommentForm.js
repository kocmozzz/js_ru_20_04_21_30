import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    static defaultProps = {
        userMinLength: 2,
        userMaxLength: 20,
        userErrorText: "Имя пользователя не должно быть менее %minLength% символов"
    }

    constructor(props) {
        super(props);

        this.defaultState = this.state = {
            user: '',
            text: '',
            errors: null
        }
    }

    onSubmit = e => {
        e.preventDefault();

        if(!this.state.errors) {
            this.props.onSubmit(this.state);
            e.target.reset();
            this.setState(this.defaultState);
        }
    }

    onUserChange = e => {
        const user = e.target.value.trim();
        let state = {user};

        // ограничение на максимальную длину можно делать здесь же
        // но я предпочел нативный атрибут maxLength
        if(user.length < this.props.userMinLength) {
            state.errors = {
                user: this.props.userErrorText.replace('%minLength%', this.props.userMinLength)
            }
        } else {
            state.errors = null;
        }

        this.setState(Object.assign({}, this.state, state));
    }

    onTextChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    renderError(errorText) {
        return <div><strong>{errorText}</strong></div>
    }

    render() {
        const {errors} = this.state;
        const userError = errors && errors.user;
        const style = userError ? {color: "red"} : null;

        return (
            <form action="" method="POST" onSubmit={this.onSubmit}>
                <div>
                    <div><label htmlFor="user">Username:</label></div>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        style={style}
                        value={this.state.user}
                        required
                        maxLength={this.props.userMaxLength}
                        onChange={this.onUserChange}
                        />
                    { userError && this.renderError(errors.user) }
                </div>
                <div>
                    <div><label htmlFor="text">Comment:</label></div>
                    <textarea name="text" id="text" cols="30" rows="10" value={this.state.text} required onChange={this.onTextChange}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
