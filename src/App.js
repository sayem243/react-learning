import React from 'react';
import Todo from './components/Hook/Todo';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Todo />
            </div>
        );
    }
}
