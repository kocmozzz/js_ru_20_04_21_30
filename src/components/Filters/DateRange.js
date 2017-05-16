import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {selectDateRange} from '../../AC/index'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    static propTypes = {
        onSelectRange: PropTypes.func.isRequired
    }

    handleDayClick = (day) => {
        const range = {
            from: this.props.from,
            to: this.props.to
        }

        const newRange = DateUtils.addDayToRange(day, range);

        this.props.selectDateRange(newRange)
        this.props.onSelectRange(newRange)
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={[from, { from, to }]}
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(({daterange: {from, to}}) => ({from, to}), {selectDateRange})(DateRange)
