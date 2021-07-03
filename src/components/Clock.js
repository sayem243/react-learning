/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

// ========================React Class Component ===========================

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // const { locale } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        Hello World-
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                <Button change={this.handleClick} locale="en-US">
                    Click
                </Button>
            </div>
        );
    }
}

export default Clock;
