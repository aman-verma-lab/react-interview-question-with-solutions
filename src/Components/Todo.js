import { React, useState } from 'react';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const onInputHandler = (e) => {
        setTodoName(e.target.value);
    }
    const todoAddHandler = () => {
        let list = todoList.concat(todoName)
        setTodoList(list);
    }
    return (
        <>
            <input type="text" placeholder='Todo' onChange={onInputHandler} />
            <button type='button' onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList?.map((element) => {
                    return (
                    <div>
                        <h2>{element}</h2>
                    </div>
                    );
                })}
            </ul>
        </>
    )
};

export default Todo;