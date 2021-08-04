import React from 'react';
import './assets/css/global.css';
import Logo from './components/Logo';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <Todo /> */}
                <Logo />
            </div>
        );
    }
}
