import Counter from './components/Counter';
import ClickCounter from './components/React_Render_Props/ClickCounter';
import HoverCounter from './components/React_Render_Props/HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            />
            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            />
        </div>
    );
}

export default App;
