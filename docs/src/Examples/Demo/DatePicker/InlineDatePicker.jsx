import React, { Fragment, PureComponent } from 'react';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export default class InlineDatePickerDemo extends PureComponent {
  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <InlineDatePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>

        <div className="picker">
          <MuiPickersUtilsProvider utils={MomentUtils} locale="th" moment={moment}>
            <InlineDatePicker
              label="with B.E. yearOffset"
              yearOffset={543}
              pickerHeaderFormat="ddd D MMM"
              format="dddd D MMMM YYYY"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="picker">
          <InlineDatePicker
            onlyCalendar
            label="Only calendar"
            helperText="No year selection"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>

        <div className="picker">
          <InlineDatePicker
            keyboard
            label="With keyboard"
            value={selectedDate}
            onChange={this.handleDateChange}
            format="DD/MM/YYYY"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        </div>
      </Fragment>
    );
  }
}
