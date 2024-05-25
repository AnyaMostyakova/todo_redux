export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface Todo {
    id: string;
    text: string;

    completed: boolean;
}

export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: { id: generateId(), text, completed: false },
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
    type: DELETE_TODO,
    payload: id,
});

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

export type AddTodoAction = {
    type: typeof ADD_TODO;
    payload: Todo;
};

export type ToggleTodoAction = {
    type: typeof TOGGLE_TODO;
    payload: string;
};

export type DeleteTodoAction = {
    type: typeof DELETE_TODO;
    payload: string;
};

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
