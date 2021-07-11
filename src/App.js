import React from 'react';
import Section from './components/context_api/Section';
import ThemeContext from './components/context_api/themeContext';
import Counter from './components/Counter';
import ClickCounter from './components/React_Render_Props/ClickCounter';

// function App() {
//     return (
//         <div className="app">
//             <Counter>
//                 {(count, incrementCount) => (
//                     <ClickCounter count={count} incrementCount={incrementCount} />
//                 )}
//             </Counter>

//             <Section />
//         </div>
//     );
// }

// export default App;

export default class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="app">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
