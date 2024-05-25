import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem.tsx';
import TodoInput from '../TodoInput/TodoInput.tsx';
import { addTodo, toggleTodo, deleteTodo } from '../../redux/actions';
import {RootState} from "../../redux/store.ts";
import styles from './TodoList.module.css'

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (text: string) => {
        dispatch(addTodo(text));
    };

    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            <TodoInput onAddTodo={handleAddTodo} />
            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggleTodo}
                        onDelete={handleDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
