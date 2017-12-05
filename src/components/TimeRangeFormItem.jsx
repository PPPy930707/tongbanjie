import React,{Component} from 'react'
import TimeRange from './TimeRange'

export default class TimeRangeFormItem extends Component {
    constructor(props) {
        super(props);
        const value = this.props.value || {};
        this.state = {
            startValue: value.startValue||null,
            endValue: value.endValue||null,
            endOpen:false
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }
    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }
    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }
    onStartChange(startValue){
        if (!('value' in this.props)) {
            this.setState({ startValue });
        }
        this.triggerChange({startValue})
    }

    onEndChange(endValue) {
        if (!('value' in this.props)) {
            this.setState({ endValue });
        }
        this.triggerChange({endValue})
    }
    triggerChange(changedValue){
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, {startValue:this.state.startValue,endValue:this.state.endValue}, changedValue));
        }
    }
    render() {
        let {startValue,endValue,endOpen}=this.state
        return (
            <TimeRange
                disabled={this.props.disabled?this.props.disabled:false}
                {...this.props}
                disabledStartDate={this.disabledStartDate}
                handleStartOpenChange={this.handleStartOpenChange}
                disabledEndDate={this.disabledEndDate}
                handleEndOpenChange={this.handleEndOpenChange}
                onStartChange={this.onStartChange.bind(this)}
                onEndChange={this.onEndChange.bind(this)}
                startValue={startValue}
                endValue={endValue}
                endOpen={endOpen}
            />
        );
    }
}