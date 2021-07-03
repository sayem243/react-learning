import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emjoi) => `${emjoi} ${text} ${emjoi}`;

    render() {
        // const text = 'I am the Emoji Component ';
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
