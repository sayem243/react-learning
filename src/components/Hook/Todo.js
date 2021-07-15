import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('js')
            ? 'you need js skill to complete the task'
            : null;
        setTodo(inputValue);
        setWarning(updateWarning);
    };

    return (
        <div>
            <h5>{todo}</h5>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || 'Good Choice!!'}</h2>
        </div>
    );
}

export default Todo;
