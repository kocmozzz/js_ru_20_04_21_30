import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {

  constructor(props) {
    super(props);

    this.state = {
      openedId: null
    }
  }

  toggle = openedId => e => {
    this.setState({
      openedId: this.state.openedId == openedId ? null : openedId
    });
  }

  render() {
    return <OriginalComponent {...this.props} toggleOpen={this.toggle} openedId={this.state.openedId} />
  }

}
