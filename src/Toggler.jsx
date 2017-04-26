import React, {Component} from 'react';

export default class Toggler extends Component {
  state = {
      isOpen: this.props.isOpen
  }

  static defaultProps = {
    activeText: "Скрыть",
    inactiveText: "Показать",
    labelShown: true,
    isOpen: false
  }

  toggle = (e) => {
    e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getLabel() {
    const { activeText, inactiveText } = this.props;
    const { isOpen } = this.state;

    return (
      <button type="button" onClick={this.toggle}>{isOpen ? activeText : inactiveText}</button>
    )
  }

  render() {
    const { isOpen } = this.state;
    const { labelShown } = this.props;

    return (
        <div>
          { labelShown && this.getLabel() }
          { isOpen && this.props.children }
        </div>
    );
  }
}
