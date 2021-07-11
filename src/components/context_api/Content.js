import React from 'react';
import Counter from '../Counter';
import HoverCounter from '../React_Render_Props/HoverCounter';
import ThemeContext from './themeContext';

export default function Content() {
    return (
        <div>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
