import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Range extends Component {
  state = {
    from: null,
    to: null,
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  render() {
    const { from, to } = this.state;
    return (
      <div>
        {from && to && <p>С {from.toString()} по {to.toString()}</p>}
        <DayPicker
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}
