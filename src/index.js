/* eslint-disable react/destructuring-assignment */
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

// const index = 0;
// ================Jsx Element and Rendering==================
/*
setInterval(() => {
    const element = (
        // React.createElement('h1', null, 'Hello World !');
        <h1 className="heading" tabIndex={index}>
            <span className="text">Hello World {new Date().toLocaleTimeString()} </span>
        </h1>
    );
    ReactDOM.render(element, document.getElementById('root'));
}, 1000);
*/

// ==================React Component and Props======================
/*
function Clock({ local: localTime, time }) {
    return (
        <h1 className="heading">
            <span className="text">Hello World {new Date().toLocaleTimeString(localTime)} </span>
            <h5 className="time"> HI {new Date().toDateString(time)} </h5>
        </h1>
    );
}

ReactDOM.render(<Clock local="bn-BD" time="bd" />, document.getElementById('root'));

*/

// ========================React Class Component ===========================

// eslint-disable-next-line react/prefer-stateless-function
// class Clock extends React.Component {
//     render() {
//         return (
//             <h1 className="heading">
//                 <span className="text">
//                     Hello World--{this.props.children}
//                     {new Date().toLocaleTimeString(this.props.locale)}
//                 </span>
//             </h1>
//         );
//     }
// }

// ReactDOM.render(<Clock locale="bn-BD">Test</Clock>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
