import React from 'react'
import { DatePicker } from 'antd'

export default class TimeRange extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='time-range-container'>
        <DatePicker
          disabled={this.props.disabled}
          size="large"
          style={this.props.showTime ? {} : { width: '120px' }}
          disabledDate={this.props.disabledStartDate}
          format={this.props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'}
          value={this.props.startValue}
          placeholder="请选择开始时间"
          onChange={this.props.onStartChange}
          onOpenChange={this.props.handleStartOpenChange}
          getCalendarContainer={() => $('.time-range-container')[0]}
        />
        <span style={{ margin: '0 5px', color: '#fff', opacity: '0.65' }}>至</span>
        <DatePicker
          disabled={this.props.disabled}
          size="large"
          style={this.props.showTime ? {} : { width: '120px' }}
          disabledDate={this.props.disabledEndDate}
          showTime={this.props.showTime}
          format={this.props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'}
          value={this.props.endValue}
          placeholder="请选择结束时间"
          onChange={this.props.onEndChange}
          open={this.props.endOpen}
          onOpenChange={this.props.handleEndOpenChange}
          getCalendarContainer={() => $('.time-range-container')[0]}
        />
      </div>
    );
  }
}